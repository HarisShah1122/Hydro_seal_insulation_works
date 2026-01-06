# Vercel Deployment Guide for Hydro Seal Insulation Works

## Pre-Deployment Checklist ✅

1. ✅ Google verification file: `main-file/public/googlea7bd76da0ee48a90.html`
2. ✅ Vercel configuration updated: `vercel.json` points to `main-file` directory
3. ✅ SEO metadata enhanced in `main-file/app/layout.jsx`
4. ✅ Sitemap configured: `main-file/app/sitemap.js`
5. ✅ Robots.txt configured: `main-file/app/robots.js`

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment with SEO optimization"
   git push origin main
   ```

2. **Go to Vercel Dashboard**
   - Visit: https://vercel.com
   - Sign in or create an account
   - Click "Add New Project"

3. **Import your repository**
   - Select your repository
   - Vercel will auto-detect Next.js

4. **Configure Project Settings**
   - **Root Directory**: Set to `main-file`
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm ci` (auto-detected)

5. **Environment Variables** (if needed)
   - Add any required environment variables in the Vercel dashboard

6. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd main-file
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new
   - Confirm settings

5. **Production Deployment**
   ```bash
   vercel --prod
   ```

## Post-Deployment: Google Search Console Setup

1. **Verify Domain Ownership**
   - Go to: https://search.google.com/search-console
   - Add property: `https://hydrosealinsulation.ae`
   - Choose "HTML file upload" method
   - Upload the file: `googlea7bd76da0ee48a90.html`
   - OR use the meta tag method (already added to layout.jsx)

2. **Submit Sitemap**
   - In Google Search Console, go to "Sitemaps"
   - Submit: `https://hydrosealinsulation.ae/sitemap.xml`

3. **Request Indexing**
   - Use "URL Inspection" tool
   - Request indexing for your main pages

## SEO Features Implemented

✅ **Comprehensive Meta Tags**
- Title templates
- Descriptions
- Keywords
- Open Graph tags
- Twitter Card tags

✅ **Google Verification**
- HTML file: `googlea7bd76da0ee48a90.html`
- Meta tag in layout.jsx

✅ **Sitemap**
- Auto-generated at `/sitemap.xml`
- Includes all pages with priorities

✅ **Robots.txt**
- Configured at `/robots.txt`
- Points to sitemap

✅ **Canonical URLs**
- Set in metadata

✅ **Structured Data Ready**
- Open Graph for social sharing
- Twitter Cards for Twitter sharing

## Important URLs After Deployment

- **Site**: `https://hydrosealinsulation.ae`
- **Sitemap**: `https://hydrosealinsulation.ae/sitemap.xml`
- **Robots**: `https://hydrosealinsulation.ae/robots.txt`
- **Google Verification**: `https://hydrosealinsulation.ae/googlea7bd76da0ee48a90.html`

## Troubleshooting

### Build Fails
- Check Node.js version (requires >=18.0.0)
- Verify all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### Google Not Indexing
- Wait 24-48 hours after deployment
- Submit sitemap in Google Search Console
- Request indexing for key pages
- Check robots.txt is accessible

### Domain Not Working
- Verify DNS settings in Vercel
- Check domain configuration in Vercel dashboard
- Ensure SSL certificate is active

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Verify domain in Google Search Console
3. ✅ Submit sitemap
4. ✅ Monitor indexing status
5. ✅ Track performance in Google Search Console

