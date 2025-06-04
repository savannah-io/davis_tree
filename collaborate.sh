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

# Function to check git authentication
check_auth() {
    print_status "Checking GitHub authentication..."
    
    # Try a simple fetch to test authentication
    if git fetch origin --dry-run 2>/dev/null; then
        print_success "GitHub authentication is working!"
        return 0
    else
        print_error "GitHub authentication failed!"
        print_status "Solutions:"
        echo "  1. Open GitHub Desktop and sign in"
        echo "  2. Run: git config --global credential.helper manager-core"
        echo "  3. Or set up a personal access token"
        echo ""
        echo "After fixing authentication, run the script again."
        return 1
    fi
}

# Setup function - run once to create shared branch
setup_collaboration() {
    print_status "Setting up collaboration branch..."
    
    # Fetch latest from origin
    print_status "Fetching latest from GitHub..."
    git fetch origin
    
    # Check if shared branch exists locally
    if git show-ref --verify --quiet refs/heads/$SHARED_BRANCH; then
        print_warning "Shared branch '$SHARED_BRANCH' already exists locally"
        # Ensure upstream is set even if branch exists
        git checkout $SHARED_BRANCH
        git branch --set-upstream-to=origin/$SHARED_BRANCH $SHARED_BRANCH 2>/dev/null
    else
        # Check if shared branch exists on remote
        if git show-ref --verify --quiet refs/remotes/origin/$SHARED_BRANCH; then
            print_status "Shared branch exists on remote, checking it out..."
            git checkout -b $SHARED_BRANCH origin/$SHARED_BRANCH
        else
            print_status "Creating new shared branch '$SHARED_BRANCH'..."
            git checkout -b $SHARED_BRANCH
            
            # Create initial commit if no commits exist
            if [ -z "$(git log --oneline 2>/dev/null)" ]; then
                print_status "Creating initial commit..."
                git add -A
                git commit -m "Initial commit for collaboration" || echo "No files to commit"
            fi
            
            print_status "Pushing new branch to GitHub..."
            git push -u origin $SHARED_BRANCH || {
                print_error "Failed to push new branch to GitHub!"
                print_status "Please ensure you're authenticated with GitHub."
                print_status "Try opening GitHub Desktop and signing in, then run setup again."
                exit 1
            }
        fi
    fi
    
    # Verify the setup worked
    git fetch origin
    if git show-ref --verify --quiet refs/remotes/origin/$SHARED_BRANCH; then
        print_success "Collaboration setup complete!"
        print_status "Both you and your partner can now use:"
        echo "  ./collaborate.sh push  - to share your changes"
        echo "  ./collaborate.sh pull  - to get partner's changes"
    else
        print_error "Setup may have failed. The remote branch wasn't created properly."
        print_status "Please check your GitHub authentication and try again."
    fi
}

# Push function - commit and push changes
push_changes() {
    print_status "Preparing to share your changes..."
    
    # Check authentication first
    if ! check_auth; then
        exit 1
    fi
    
    # Switch to shared branch
    git checkout $SHARED_BRANCH 2>/dev/null || {
        print_error "Shared branch not found. Run './collaborate.sh setup' first!"
        exit 1
    }
    
    # Ensure upstream is set
    print_status "Setting up remote tracking..."
    git branch --set-upstream-to=origin/$SHARED_BRANCH $SHARED_BRANCH 2>/dev/null
    
    # Pull latest changes first to avoid conflicts
    print_status "Getting latest changes from partner..."
    git fetch origin
    git merge origin/$SHARED_BRANCH || {
        print_error "Merge conflicts detected! Please resolve manually and try again."
        exit 1
    }
    
    # Check if there are any changes to commit
    if git diff --quiet && git diff --cached --quiet; then
        print_warning "No changes to commit!"
        print_status "Checking if local branch is ahead of remote..."
        
        # Check if we're ahead of remote
        LOCAL=$(git rev-parse HEAD)
        REMOTE=$(git rev-parse origin/$SHARED_BRANCH 2>/dev/null || echo "")
        
        if [ "$LOCAL" != "$REMOTE" ] && [ -n "$REMOTE" ]; then
            print_status "Local commits found, pushing to remote..."
            git push origin $SHARED_BRANCH --force-with-lease || {
                print_error "Failed to push. You may need to authenticate with GitHub."
                print_status "Try opening GitHub Desktop and syncing, then run this script again."
                exit 1
            }
            print_success "Local commits pushed successfully!"
        else
            print_status "Everything is up to date!"
        fi
        exit 0
    fi
    
    # Add all changes
    print_status "Adding all changes..."
    git add -A
    
    # Create automatic commit message with timestamp
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    COMMIT_MSG="Changes by $CURRENT_USER - $TIMESTAMP"
    
    # Commit changes
    print_status "Committing changes: '$COMMIT_MSG'"
    git commit -m "$COMMIT_MSG" || {
        print_error "Failed to commit changes!"
        exit 1
    }
    
    # Push to shared branch with force-with-lease for safety
    print_status "Sharing changes with partner..."
    git push origin $SHARED_BRANCH --force-with-lease || {
        print_error "Failed to push changes to GitHub!"
        print_status "This might be an authentication issue."
        print_status "Possible solutions:"
        echo "  1. Open GitHub Desktop and sign in"
        echo "  2. Try: git config --global credential.helper store"
        echo "  3. Or manually push once in GitHub Desktop to save credentials"
        exit 1
    }
    
    print_success "Changes shared successfully!"
    print_status "Your partner can now run './collaborate.sh pull' to get your changes"
    
    # Show what was pushed
    print_status "Changes pushed:"
    git log --oneline -3 --color=always
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