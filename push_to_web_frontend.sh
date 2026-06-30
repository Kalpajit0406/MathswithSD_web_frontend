#!/bin/bash
cd /home/kalpajit/MathswithSD_website
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/Kalpajit0406/MathswithSD_web_frontend.git
# Push to the main branch of MathswithSD_web_frontend
git push -u origin main -f
