# Daily Blogs - Electron-inspired Docusaurus Site

A clean, original, Electron-inspired Docusaurus website for Daily Blogs.

## What this is

This is a from-scratch Docusaurus site for:

- Cloud architecture
- Platform engineering
- Kubernetes / AKS / EKS
- Terraform / IaC
- DevSecOps
- SRE / Observability
- Interview preparation

The visual direction is inspired by the structure and product-doc feel of the Electron website, but the content, branding, logo, copy and UI identity are original for Daily Blogs.

## Important note on logos

The homepage references third-party cloud/tool logos from Simple Icons via CDN for topic identification. Product names and logos are trademarks of their respective owners. Review each vendor's brand guidelines if you want to use them commercially.

## Local development

Use Node.js 22 or newer.

```bash
npm install
npm run start
```

Production build:

```bash
npm run build
npm run serve
```

## Deploying to GitHub Pages

This package intentionally does not include GitHub Actions because the site was requested from scratch without existing actions.

For `https://dailyblogs.github.io/`, use:

```js
url: 'https://dailyblogs.github.io'
baseUrl: '/'
```

Those values are already configured in `docusaurus.config.js`.
