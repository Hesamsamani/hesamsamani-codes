# hesamsamani.codes

Personal portfolio for **Hesam Samani** — open source Python desktop apps and AI-powered developer tools.

Featured projects include [Distilmark](https://github.com/Hesamsamani/Distilmark) (8-engine PDF → Markdown converter with local AI) and [CourseraGrab](https://github.com/Hesamsamani/CourseraGrab) (offline Coursera course downloader).

Built with [Astro](https://astro.build) and Tailwind CSS, deployed to Vercel at **https://hesamsamani.codes**.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → ./dist/
npm run preview  # preview production build locally
```

## Deploy & DNS

1. **[DEPLOY.md](./DEPLOY.md)** — deploy to Vercel (CLI or dashboard)
2. **[DNS-SETUP.md](./DNS-SETUP.md)** — point **hesamsamani.codes** at the deployment

## GitHub profile setup

- **[GITHUB-MANUAL-STEPS.md](./GITHUB-MANUAL-STEPS.md)** — profile fields, repo topics, Pages, and Vercel checklist
- **[PIN-REPOS.md](./PIN-REPOS.md)** — pin featured repos on your GitHub profile (manual UI steps)

## Project structure

```text
/
├── public/           # Static assets (images, favicon)
├── src/
│   ├── components/   # Astro UI components
│   ├── data/         # Projects and tech stack data
│   ├── layouts/      # Page layouts
│   ├── pages/        # Routes (index.astro → /)
│   └── styles/       # Global CSS
├── DEPLOY.md              # Vercel deploy instructions
├── DNS-SETUP.md           # Domain & Vercel DNS guide
├── GITHUB-MANUAL-STEPS.md # GitHub profile & related setup
├── PIN-REPOS.md           # Pin featured repos on GitHub
└── vercel.json            # Vercel deployment config
```