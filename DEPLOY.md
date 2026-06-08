# Deploy hesamsamani-codes to Vercel

**Status:** Blocked on Vercel authentication (no valid token or login session).

The project builds successfully (`npm run build` → `./dist/`). `vercel.json` is configured for Astro static output.

---

## Option A — CLI deploy (recommended, ~2 minutes)

Run these commands from the project root in PowerShell or Terminal:

```powershell
cd C:\Users\hesam\projects\hesamsamani-codes
npx vercel login
npx vercel --prod --yes
```

### What happens in the browser (`vercel login`)

1. The CLI prints a URL like `https://vercel.com/oauth/device?user_code=XXXX-XXXX` and may open it automatically.
2. Sign in to Vercel (GitHub, GitLab, Bitbucket, or email).
3. Click **Confirm** to authorize the CLI.
4. Return to the terminal — you should see `Success! Authentication complete.`

### What happens on deploy (`vercel --prod --yes`)

1. Vercel links this folder to a new project (name defaults to `hesamsamani-codes`).
2. It runs `npm run build` and uploads `./dist/`.
3. The CLI prints the **Production** URL, e.g.:
   - `https://hesamsamani-codes.vercel.app`
   - or `https://hesamsamani-codes-<your-team>.vercel.app`

Copy that URL into [DNS-SETUP.md](./DNS-SETUP.md) under **Vercel project URL**.

---

## Option B — One-click via Vercel dashboard (no CLI)

1. Push this repo to GitHub: `https://github.com/Hesamsamani/hesamsamani-codes`
2. Open **[Import project on Vercel](https://vercel.com/new)**
3. Select the `hesamsamani-codes` repository
4. Confirm settings (auto-detected from `vercel.json`):
   - **Framework:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Node.js version:** ≥ 22.12 (Project Settings → General)
5. Click **Deploy**
6. Note the production URL on the deployment summary page

---

## Option C — Non-interactive deploy (CI / token)

For scripted deploys without a browser:

1. Create a token: [vercel.com/account/tokens](https://vercel.com/account/tokens) → **Create**
2. Set it in your shell (PowerShell):

   ```powershell
   $env:VERCEL_TOKEN = "your_token_here"
   ```

3. Deploy:

   ```powershell
   cd C:\Users\hesam\projects\hesamsamani-codes
   npx vercel --prod --yes --token $env:VERCEL_TOKEN
   ```

---

## After first deploy

1. Add custom domain `hesamsamani.codes` in **Project Settings → Domains**
2. Follow [DNS-SETUP.md](./DNS-SETUP.md) to point DNS at Vercel
3. Verify: `https://hesamsamani.codes` loads the portfolio

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| `No existing credentials found` | Run `npx vercel login` |
| `The specified token is not valid` | Create a new token or run `npx vercel login` |
| Build fails on Vercel | Set Node.js to **22.x** in project settings |
| Wrong output | Ensure `vercel.json` has `"outputDirectory": "dist"` |

---

## Verified locally

- **Vercel CLI:** 54.9.1 (`npx vercel --version`)
- **Node:** ≥ 22.12 (see `package.json` engines)
- **Build:** `npm run build` completes with static output in `dist/`