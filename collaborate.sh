#!/bin/bash

# Davis Tree Collaboration Script
# Usage: ./collaborate.sh [push|pull|setup]

SHARED_BRANCH="shared-dev"
CURRENT_USER=$(git config user.name)

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[DAVIS TREE]${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Setup function - run once to create shared branch
setup_collaboration() {
    print_status "Setting up collaboration branch..."
    
    # Fetch latest from origin
    git fetch origin
    
    # Check if shared branch exists locally
    if git show-ref --verify --quiet refs/heads/$SHARED_BRANCH; then
        print_warning "Shared branch '$SHARED_BRANCH' already exists locally"
    else
        # Check if shared branch exists on remote
        if git show-ref --verify --quiet refs/remotes/origin/$SHARED_BRANCH; then
            print_status "Shared branch exists on remote, checking it out..."
            git checkout -b $SHARED_BRANCH origin/$SHARED_BRANCH
        else
            print_status "Creating new shared branch '$SHARED_BRANCH'..."
            git checkout -b $SHARED_BRANCH
            git push -u origin $SHARED_BRANCH
        fi
    fi
    
    print_success "Collaboration setup complete!"
    print_status "You can now use:"
    echo "  ./collaborate.sh push  - to share your changes"
    echo "  ./collaborate.sh pull  - to get partner's changes"
}

# Push function - commit and push changes
push_changes() {
    print_status "Preparing to share your changes..."
    
    # Switch to shared branch
    git checkout $SHARED_BRANCH 2>/dev/null || {
        print_error "Shared branch not found. Run './collaborate.sh setup' first!"
        exit 1
    }
    
    # Pull latest changes first to avoid conflicts
    print_status "Getting latest changes from partner..."
    git pull origin $SHARED_BRANCH
    
    # Check if there are any changes to commit
    if git diff --quiet && git diff --cached --quiet; then
        print_warning "No changes to commit!"
        exit 0
    fi
    
    # Add all changes
    git add .
    
    # Create automatic commit message with timestamp
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    COMMIT_MSG="Changes by $CURRENT_USER - $TIMESTAMP"
    
    # Commit changes
    print_status "Committing changes: '$COMMIT_MSG'"
    git commit -m "$COMMIT_MSG"
    
    # Push to shared branch
    print_status "Sharing changes with partner..."
    git push origin $SHARED_BRANCH
    
    print_success "Changes shared successfully!"
    print_status "Your partner can now run './collaborate.sh pull' to get your changes"
}

# Pull function - get partner's changes
pull_changes() {
    print_status "Getting partner's latest changes..."
    
    # Switch to shared branch
    git checkout $SHARED_BRANCH 2>/dev/null || {
        print_error "Shared branch not found. Run './collaborate.sh setup' first!"
        exit 1
    }
    
    # Stash any uncommitted changes
    if ! git diff --quiet || ! git diff --cached --quiet; then
        print_warning "You have uncommitted changes. Stashing them temporarily..."
        git stash push -u -m "Auto-stash before pull - $(date '+%Y-%m-%d %H:%M:%S')"
        STASHED=true
    fi
    
    # Pull latest changes
    git pull origin $SHARED_BRANCH
    
    # Restore stashed changes if any
    if [ "$STASHED" = true ]; then
        print_status "Restoring your uncommitted changes..."
        git stash pop
    fi
    
    print_success "Got partner's changes successfully!"
    
    # Show recent commits
    print_status "Recent changes:"
    git log --oneline -5 --color=always
}

# Status function - show current state
show_status() {
    print_status "Davis Tree Project Status"
    echo ""
    
    # Current branch
    CURRENT_BRANCH=$(git branch --show-current)
    echo "Current branch: $CURRENT_BRANCH"
    
    # Check if on shared branch
    if [ "$CURRENT_BRANCH" = "$SHARED_BRANCH" ]; then
        print_success "You're on the shared collaboration branch"
    else
        print_warning "You're not on the shared branch ($SHARED_BRANCH)"
        echo "Run 'git checkout $SHARED_BRANCH' to switch"
    fi
    
    echo ""
    
    # Show uncommitted changes
    if ! git diff --quiet || ! git diff --cached --quiet; then
        print_warning "You have uncommitted changes:"
        git status --porcelain
    else
        print_success "No uncommitted changes"
    fi
    
    echo ""
    
    # Show recent commits on shared branch
    if git show-ref --verify --quiet refs/heads/$SHARED_BRANCH; then
        print_status "Recent commits on shared branch:"
        git log $SHARED_BRANCH --oneline -5 --color=always
    fi
}

# Main script logic
case "$1" in
    "setup")
        setup_collaboration
        ;;
    "push")
        push_changes
        ;;
    "pull")
        pull_changes
        ;;
    "status"|"")
        show_status
        ;;
    *)
        echo "Davis Tree Collaboration Script"
        echo ""
        echo "Usage: ./collaborate.sh [command]"
        echo ""
        echo "Commands:"
        echo "  setup  - Set up shared collaboration branch (run once)"
        echo "  push   - Commit and share your changes with partner"
        echo "  pull   - Get partner's latest changes"
        echo "  status - Show current project status"
        echo ""
        echo "Quick workflow:"
        echo "  1. Run './collaborate.sh setup' (first time only)"
        echo "  2. Work on your changes"
        echo "  3. Run './collaborate.sh push' to share"
        echo "  4. Partner runs './collaborate.sh pull' to get changes"
        ;;
esac 