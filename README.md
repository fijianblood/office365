# office365
free to use office and windows 

A security-awareness page for LvTS clients: it shows how easy unofficial Windows & Office activation tools are to find, and why running them is unsafe (education only, not a recommendation). Standalone site (it used to be the
Activation page on the LvTS website). React + TypeScript + Vite + Tailwind CSS.

## Run it

```bash
npm install
npm run dev       # local preview at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the built dist/ locally
```

## Files

- `src/pages/ActivationHelpPage.tsx`: the page itself (unchanged from the website).
- `src/index.css`: the fonts, background and effects the page used on the website.
- `index.html`: tab title, Google description and link-preview tags.
- `public/og/activation.jpg`: the link-preview image.

The build uses relative paths, so `dist/` works from any address or subfolder.

## Publishing (GitHub Pages)

Every push to `main` builds the page and publishes it at
https://fijianblood.github.io/office365/ (`.github/workflows/deploy.yml`).
Pages is set to **Settings → Pages → Source: GitHub Actions**. To publish again
without a change, run the workflow from the **Actions** tab ("Run workflow").
