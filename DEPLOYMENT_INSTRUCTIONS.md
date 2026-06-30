# MathsWithSD Website — Deployment Instructions

This project is a modern **Next.js 15+** application configured with **TypeScript**, **Tailwind CSS (v4)**, and **Framer Motion**. It compiles to optimized static assets, making it deployable to static hosting platforms (like Vercel, Netlify, or GitHub Pages) or as a dynamic node application.

---

## ⚡ Option 1: Deploying to Vercel (Recommended)

Vercel is the creator of Next.js and provides first-class support for deployment:

### Via Git Integration (Easiest)
1. Commit all your changes and push them to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: Migrated promotional website to Next.js 15 with Tailwind v4"
   git push origin main
   ```
2. Log into your [Vercel Dashboard](https://vercel.com/dashboard).
3. Click **Add New** > **Project**.
4. Import your repository (`MathswithSD_web_frontend`).
5. Vercel will automatically detect the **Next.js** framework and configure the build command as `next build`.
6. Click **Deploy**. Your site will be live on a custom `vercel.app` subdomain in under a minute!

---

## ☁️ Option 2: Deploying to Netlify

Netlify has native support for Next.js via the `@netlify/plugin-nextjs` runtime.

### Via Netlify Web UI
1. Push your latest commits to GitHub:
   ```bash
   git push origin main
   ```
2. Log into [Netlify](https://app.netlify.com).
3. Click **Add new site** > **Import an existing project**.
4. Select **GitHub** and authorize.
5. Select your repository.
6. Under build configurations:
   - **Build command**: `npm run build` or `next build`
   - **Publish directory**: `.next` (or `out` if you configure static exports)
7. Click **Deploy site**.

### Via Netlify CLI (Command Line)
If you want to deploy directly from the command line:
1. Log in to Netlify CLI:
   ```bash
   npx netlify login
   ```
2. Link your project folder:
   ```bash
   npx netlify link
   ```
3. Run the deployment:
   ```bash
   npx netlify deploy --prod
   ```

---

## 📦 Option 3: Local Testing / Running Locally

To start the development server to test page responsiveness and animations:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

To run a production-build preview:
```bash
npm run build
npm run start
```
This serves the optimized, production-compiled bundle locally on port `3000`.
