# Netlify SPA Configuration Guide

This portfolio has been configured to deploy as a **Static Single Page Application (SPA)** on Netlify.

## What Changed

### 1. **netlify.toml**
- ✅ Build command: `npm install && npm run build`
- ✅ Publish directory: `dist` (root of built files)
- ✅ SPA redirect: All routes → `/index.html`
- ✅ Security headers configured
- ✅ Asset caching optimized

### 2. **vite.config.ts**
- ✅ Removed Cloudflare SSR configuration
- ✅ Configured for browser-only (static) build
- ✅ No server-side rendering needed

### 3. **Build Process**
Instead of:
```bash
bun run build  # Builds for Cloudflare with SSR
```

Now uses:
```bash
npm install && npm run build  # Builds static SPA for Netlify
```

## How It Works

1. **Netlify detects** `netlify.toml` on deployment
2. **Runs**: `npm install && npm run build`
3. **Publishes**: `dist/` directory (your SPA)
4. **Routes**: All requests → `/index.html` (SPA routing)
5. **TanStack Router** handles client-side navigation

## Deployment Steps

1. Push changes to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Select branch (main)
5. Click Deploy
6. Site goes live in ~2-3 minutes ✅

## Key Features

✅ **SPA Routing** - TanStack Router handles all navigation  
✅ **Security Headers** - XSS, Clickjack, MIME sniffing protection  
✅ **Asset Caching** - 1-year cache for hashed files  
✅ **Production Ready** - Optimized build output  

## Environment Variables

No environment variables needed for basic deployment.

## Troubleshooting

**Issue**: "Cannot find module"  
**Solution**: Ensure Node 20 is selected in Netlify settings

**Issue**: Routes show 404  
**Solution**: Verify `netlify.toml` has SPA redirect configured

**Issue**: Styles not loading  
**Solution**: Check that `/assets` files are in `dist/` after build
