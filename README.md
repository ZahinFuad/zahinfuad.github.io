# Khondaker Zahin Fuad Academic Website

One-page Astro academic research website for `zahinfuad.github.io`.

## Commands

```sh
npm install
npm run dev
npm run build
```

## Deployment

The site is ready for GitHub Pages via `.github/workflows/deploy.yml`.
After creating the `zahinfuad.github.io` repository on GitHub, add it as the remote, push `main`, and set Pages source to GitHub Actions.

## Profile Assets And Links

- Academic CV: configured in `src/data/profile.ts` as a published Google Docs URL.
- Headshot: `public/images/zahin-fuad-headshot.png`.
- Google Scholar, LinkedIn, ORCID, ResearchGate, GitHub, and email links are centralized in `src/data/profile.ts`.
- Replace `public/images/og-image.png` and project images in `public/images/projects/` if project artwork becomes available.
