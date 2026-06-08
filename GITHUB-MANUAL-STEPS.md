# Manual GitHub Steps (requires `gh auth refresh -s user`)

Run once after authenticating:

```powershell
gh auth refresh -h github.com -s user,repo
```

## Profile fields

```powershell
gh api user -X PATCH `
  -f bio="BIM Specialist · AI tool builder · Revit & Python" `
  -f company="Olum Fonun Kadoos Higher Education Institute" `
  -f location="Hasselt, Belgium" `
  -f blog="https://hesamsamani.codes"
```

## Distilmark topics

```powershell
'{"names":["pdf","markdown","pyqt6","llm","ollama","document-ai","desktop-app","pymupdf","python","converter"]}' | gh api repos/Hesamsamani/Distilmark -X PUT --input -
```

## Pin repositories (GitHub UI only)

See **[PIN-REPOS.md](./PIN-REPOS.md)** for full step-by-step instructions with screenshots.

Quick list — https://github.com/Hesamsamani → **Customize your pins**:

1. Distilmark
2. CourseraGrab
3. Hesamsamani
4. Hesamsamani.github.io

## GitHub Pages (.me)

https://github.com/Hesamsamani/Hesamsamani.github.io/settings/pages

- Source: **GitHub Actions**
- Custom domain: `hesamsamani.me` (verify DNS)

## Vercel (.codes)

1. Deploy this repo — see **[DEPLOY.md](./DEPLOY.md)** (CLI or dashboard import)
2. Add domains `hesamsamani.codes` and `www.hesamsamani.codes` in Vercel
3. Follow **[DNS-SETUP.md](./DNS-SETUP.md)** for registrar records