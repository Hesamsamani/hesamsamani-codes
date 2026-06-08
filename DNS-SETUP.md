# DNS Setup for hesamsamani.codes on Vercel

Point your domain to Vercel so the Astro portfolio deploys at **https://hesamsamani.codes**.

## Prerequisites

1. Deploy the site to Vercel — see **[DEPLOY.md](./DEPLOY.md)** (CLI login or dashboard import)
2. Push this repo to GitHub: `https://github.com/Hesamsamani/hesamsamani-codes` (if using Git-based deploy)
3. Set the production domain to `hesamsamani.codes` in **Project Settings → Domains**

## Vercel project URL

> **Pending first deploy.** After you deploy, paste the production URL here:

| Item | Value |
|------|-------|
| **Vercel project** | `hesamsamani-codes` |
| **Default production URL** | `https://hesamsamani-codes.vercel.app` *(or team-scoped variant)* |
| **Custom domain (target)** | `https://hesamsamani.codes` |

To find the exact URL: Vercel dashboard → your project → **Deployments** → latest **Production** deployment → **Visit**.

## DNS records

Add these records at your domain registrar (where you bought `hesamsamani.codes`):

| Type  | Name | Value              | TTL  |
|-------|------|--------------------|------|
| **A** | `@`  | `76.76.21.21`      | 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com` | 3600 |

> **Note:** Some registrars use `@` for the root domain; others label it as the bare domain `hesamsamani.codes`.

### Root domain (`hesamsamani.codes`)

```
Type: A
Host: @ (or leave blank)
Value: 76.76.21.21
```

### WWW subdomain (`www.hesamsamani.codes`)

```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
```

## Vercel dashboard steps

1. Go to your project → **Settings** → **Domains**
2. Add `hesamsamani.codes` and `www.hesamsamani.codes`
3. Vercel will verify the DNS records above
4. Enable **Redirect www → apex** (or apex → www) per your preference

## Propagation

DNS changes can take from a few minutes up to 48 hours. Check status:

- Vercel domain settings page (shows verification status)
- `nslookup hesamsamani.codes`
- [https://dnschecker.org](https://dnschecker.org)

## SSL

Vercel provisions HTTPS automatically once DNS is verified. No extra certificate setup is required.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Domain not verifying | Confirm A record points to `76.76.21.21` exactly |
| www not working | Ensure CNAME `www` → `cname.vercel-dns.com` |
| Old DNS cached | Wait for TTL expiry or flush local DNS cache |
| Build fails on Vercel | Ensure Node.js ≥ 22.12 (set in Vercel project settings) |