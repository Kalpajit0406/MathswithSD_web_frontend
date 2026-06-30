#!/bin/bash
cd /home/kalpajit/MathswithSD_website
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/Kalpajit0406/MathswithSD.git
# Push local main branch to the remote branch named 'website'
git push origin main:website -f
