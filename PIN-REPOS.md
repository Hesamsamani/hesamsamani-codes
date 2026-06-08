# Pin GitHub Repositories — Manual Steps

**Status:** Automation blocked (browser auth wall). Complete these steps manually (~2 minutes).

**Target profile:** https://github.com/Hesamsamani

**Repos to pin (in this order):**

| # | Repository | Purpose |
|---|------------|---------|
| 1 | `Distilmark` | PDF → Markdown desktop app |
| 2 | `CourseraGrab` | Coursera course downloader |
| 3 | `Hesamsamani` | Profile README |
| 4 | `Hesamsamani.github.io` | BIM site source |

---

## Current state (verified via GraphQL)

| Item | Value |
|------|-------|
| Currently pinned | `CourseraGrab`, `Distilmark` |
| Slots remaining | 4 (of 6 max) |
| Can change pins | Yes (`viewerCanChangePinnedItems: true`) |
| Missing pins | `Hesamsamani`, `Hesamsamani.github.io` |

---

## Why automation failed

| Method | Result |
|--------|--------|
| **Playwright browser** | Auth wall — Playwright session is logged out (header shows **Sign in**, no **Customize your pins** button) |
| **GitHub GraphQL API** | Read-only — `pinnedItems` / `pinnableItems` queries work, but **no pin mutation exists** (`replacePinnedItems`, `updatePinnedItems` not in schema) |
| **GitHub REST API** | No endpoint — `/user/profile/pins` returns 404 |
| **`gh` CLI** | Authenticated as `Hesamsamani`, but token scopes are `gist`, `read:org`, `repo`, `workflow` (no `user` scope; pinning unavailable regardless) |

---

## Step-by-step (GitHub web UI)

### 1. Sign in

1. Open https://github.com/login
2. Sign in as **Hesamsamani** (username/password, Google, Apple, or passkey)
3. Confirm the top-right avatar appears (not **Sign in**)

**Screenshot 1 — `screenshots/01-logged-in.png`**

- Capture the full browser window
- Must show: GitHub header with your avatar (top-right), no **Sign in** link

---

### 2. Open your profile

1. Go to https://github.com/Hesamsamani
2. Stay on the **Overview** tab (default)

**Screenshot 2 — `screenshots/02-profile-overview.png`**

- Capture the profile page before editing pins
- Must show: **Pinned** section with current repos (`CourseraGrab`, `Distilmark`)

---

### 3. Open pin customization

1. In the **Pinned** section (right column, below the contribution graph), click **Customize your pins**
   - Only visible when logged in as the profile owner
   - If you don't see it: confirm you're on your own profile and fully signed in

**Screenshot 3 — `screenshots/03-customize-pins-button.png`**

- Capture the **Pinned** section with the **Customize your pins** link/button highlighted or visible

---

### 4. Select repositories

In the **Edit pinned repositories** modal:

1. Check these four repos (uncheck all others):
   - [x] **Distilmark**
   - [x] **CourseraGrab**
   - [x] **Hesamsamani**
   - [x] **Hesamsamani.github.io**
2. Uncheck any repo you don't want pinned (e.g. `n8n`, `hesamsamani-codes`)

**Screenshot 4 — `screenshots/04-pin-modal-selected.png`**

- Capture the modal with all four repos checked
- Must show: repo names and checkboxes clearly

---

### 5. Set pin order

Drag repos in the modal (or use reorder controls) to match:

```
1. Distilmark
2. CourseraGrab
3. Hesamsamani
4. Hesamsamani.github.io
```

**Screenshot 5 — `screenshots/05-pin-order.png`**

- Capture the modal showing the final order top-to-bottom

---

### 6. Save

1. Click **Save pins**
2. Wait for the modal to close and the profile to refresh

**Screenshot 6 — `screenshots/06-saved-pins.png`**

- Capture the profile **Pinned** section after save
- Must show: all four repos in the correct order

---

## Verify (CLI)

After saving in the UI, run:

```powershell
gh api graphql -f query='query { user(login: "Hesamsamani") { pinnedItems(first: 6) { nodes { ... on Repository { name } } } } }'
```

**Expected output:**

```json
{
  "data": {
    "user": {
      "pinnedItems": {
        "nodes": [
          { "name": "Distilmark" },
          { "name": "CourseraGrab" },
          { "name": "Hesamsamani" },
          { "name": "Hesamsamani.github.io" }
        ]
      }
    }
  }
}
```

---

## Screenshot folder setup

```powershell
mkdir C:\Users\hesam\projects\hesamsamani-codes\screenshots -Force
```

Save all six screenshots there using the filenames above.

---

## Optional: enable future `gh` user-scope commands

Pinning still requires the web UI, but refreshing auth with `user` scope helps other profile mutations:

```powershell
gh auth refresh -h github.com -s user,repo
```

Follow the device-code prompt in the browser.

---

## Automation notes (for reference)

- **Playwright command used:** `npx playwright-cli open https://github.com/Hesamsamani`
- **Observed state:** Logged-out session — **Sign in** in header, **Follow** instead of **Customize your pins**
- **GraphQL introspection:** Only `pinIssue` / `unpinIssue` exist; no repository profile-pin mutations
- **Feature request:** https://github.com/orgs/community/discussions/184845