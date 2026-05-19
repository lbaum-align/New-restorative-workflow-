# Netlify Deployment Guide

This React + Vite dental scanning application is configured for deployment on Netlify.

## Quick Deployment

### Option 1: Drag & Drop (Fastest)
1. Run `npm run build` to create the `build` folder
2. Go to [Netlify](https://app.netlify.com/)
3. Drag the `build` folder to the deploy area

### Option 2: Git Integration (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect repository to Netlify
3. Netlify will auto-detect settings from `netlify.toml`
4. Deploy will trigger automatically on push

### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from project root
netlify deploy --prod
```

## Configuration Files

- **`netlify.toml`**: Main Netlify configuration
  - Build settings (publish directory, build command)
  - Redirects for SPA routing
  - Headers for caching and 3D model files
  - Dev server settings

- **`_redirects`**: Backup redirect rules
  - Ensures all routes serve `index.html` for client-side routing
  - API route handling (for future use)

- **`.nvmrc`**: Node.js version specification (v18)

## Build Settings

If configuring manually in Netlify UI:

- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Node Version**: `18` (set in Environment Variables)

## Environment Variables

If you need environment variables:
1. Go to Site Settings → Environment Variables in Netlify
2. Add variables like `VITE_API_URL=https://your-api.com`
3. Access in code: `import.meta.env.VITE_API_URL`

## 3D Model Support

The configuration includes proper MIME types and caching for:
- `.ply` files (for jaw models)
- `.stl`, `.glb`, `.gltf` files
- `.hdr` files (for lighting)

## Performance Optimizations

- Static assets cached for 1 year
- Proper MIME types for all file formats
- Immutable caching for hashed assets

## Local Development with Netlify

```bash
# Install Netlify CLI if not already installed
npm install -g netlify-cli

# Run local dev server with Netlify features
npm run netlify:dev
```

This enables Netlify redirects and edge functions during local development.

## Troubleshooting

### Build Errors
- Check Node.js version matches `.nvmrc`
- Ensure all dependencies are in `package.json`
- Run `npm install` before building

### 404 on Routes
- Verify `_redirects` file is in build output
- Check `netlify.toml` redirect configuration

### 3D Models Not Loading
- Check file paths in your code
- Verify assets are in `src/assets/` directory
- Ensure Vite's `figmaAssetResolver` plugin is working

### Performance Issues
- Check browser Network tab for failed requests
- Verify caching headers are applied
- Consider optimizing large 3D model files