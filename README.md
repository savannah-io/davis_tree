# 🌳 Davis Tree Service - Project Setup & Configuration

## 🚀 Quick Start for New Employees

### Step 1: One-Time Setup (Do This Once)

```bash
# Install GitHub CLI
winget install GitHub.cli

# Login to GitHub CLI
gh auth login
```

Follow the prompts and login through your web browser.

### Step 2: Create New Project (Every Time You Need a New Site)

```bash
# Run the magic script (creates a COPY of your project)
./setup-new-project.sh
```

Enter:

- New project name (e.g., `smith-tree-service`)
- Your GitHub username

**That's it!** The script creates a complete copy and sets everything up automatically.

**🔒 IMPORTANT: Your original project stays safe and untouched!**

---

## 🎨 How to Edit the Website

### Step 1: Navigate to Your New Project

```bash
# Go to your new project folder
cd ../your-new-project-name
```

### Step 2: Start the Website

```bash
# Start the website
npm run dev
```

### Step 3: Go to Config Editor

Open your browser and go to: `http://localhost:3000/config-editor`

### Step 4: Edit Settings

Click on any section to edit:

- **Info Bar** - Phone number, address, hours
- **Navigation** - Menu items, logo settings
- **Home Page** - Hero text, images, colors
- **Services Page** - Service descriptions, pricing
- **Contact Page** - Contact form, map, info
- **Footer** - Links, social media, styling

### Step 5: Save Changes

Changes save automatically! You'll see a green "Saved!" message.

### Step 6: View Your Changes

Go back to: `http://localhost:3000` to see your updated website.

---

## 📁 What the Script Creates

✅ **Complete copy** - Your original project remains untouched  
✅ **New directory** - Creates `../your-project-name/`  
✅ **New GitHub repository** - Your code is backed up  
✅ **3 branches** - `main`, `branch-a`, `branch-b`  
✅ **Ready to edit** - Config editor works immediately

---

## 🔧 Basic Commands

```bash
# Navigate to your project
cd ../your-project-name

# Start the website
npm run dev

# Save your changes to GitHub
git add .
git commit -m "Updated website for client"
git push

# Switch between versions
git checkout main        # Main version
git checkout branch-a    # Version A
git checkout branch-b    # Version B

# Check if everything is set up correctly (run from original project)
./check-setup.sh
```

---

## 🎯 Editing Workflow

1. **Navigate to project**: `cd ../your-project-name`
2. **Start the site**: `npm run dev`
3. **Edit config**: Go to `localhost:3000/config-editor`
4. **Preview changes**: Go to `localhost:3000`
5. **Save to GitHub**:
   ```bash
   git add .
   git commit -m "Updated for [client name]"
   git push
   ```

---

## 📞 Need Help?

### Common Issues:

- **Script won't run?** → Run `./check-setup.sh` to see what's missing
- **Can't login to GitHub?** → Run `gh auth login` again
- **Config editor not loading?** → Make sure you ran `npm run dev` in the right folder
- **Changes not saving?** → Check the browser console for errors

### Get Support:

1. Take a screenshot of any error messages
2. Contact the development team
3. Include what you were trying to do when the error happened

---

## 🎨 What You Can Edit

### Colors & Styling

- Background colors
- Text colors
- Button colors
- Border colors

### Content

- Page titles and descriptions
- Contact information
- Service descriptions
- Testimonials and reviews

### Images

- Logo
- Hero images
- Service photos
- Background images

### Settings

- Phone numbers
- Email addresses
- Business hours
- Social media links

---

## ⚠️ Important Notes

- **Your original project is never touched** - the script creates a copy
- **Always save to GitHub** after making changes
- **Test on different devices** using the preview
- **Use descriptive commit messages** when saving
- **Don't delete the config files** - they control the website
- **Each branch can have different settings** for different clients

---

## 🗂️ Project Structure After Setup

```
your-workspace/
├── davis_tree/                    # Original project (untouched)
│   ├── setup-new-project.sh      # The magic script
│   └── ...
├── smith-tree-service/            # New project copy
│   ├── package.json              # Updated with new name
│   ├── src/
│   └── ...
└── johnson-landscaping/           # Another project copy
    ├── package.json
    └── ...
```

---

**Remember**: The config editor makes it easy to customize websites without any coding knowledge! 🎉
