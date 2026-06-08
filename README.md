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

This site deploys to Vercel. To point **hesamsamani.codes** at the deployment, follow the step-by-step DNS instructions in **[DNS-SETUP.md](./DNS-SETUP.md)**.

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
├── DNS-SETUP.md      # Domain & Vercel DNS guide
└── vercel.json       # Vercel deployment config
```