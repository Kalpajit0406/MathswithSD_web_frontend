#!/bin/bash
# Initialize git and create repository using gh CLI
cd /home/kalpajit/MathswithSD_website

if [ ! -d ".git" ]; then
    git init
    git branch -M main
fi

git add .
git commit -m "Initial commit: MathsWithSD promotional website"

# Create the repo on GitHub
gh repo create MathswithSD_website --public --description "Promotional landing page for MathsWithSD" --source=. --remote=origin --push
