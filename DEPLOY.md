# Deployment Guide — StandardChargingLLC.com
_GitHub Pages · Free hosting · Tesla Fleet API compatible_

---

## What You're Deploying

```
standard_charging/website/
├── index.html                                              ← full 1-page website
├── .well-known/
│   └── appspecific/
│       └── com.tesla.3p.public-key.pem                    ← Tesla Fleet API key
└── DEPLOY.md                                              ← this file
```

The Tesla public key **must** be reachable at:
```
https://standardchargingllc.com/.well-known/appspecific/com.tesla.3p.public-key.pem
```

GitHub Pages serves `.well-known/` paths correctly — no server config needed.

---

## Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create a free account).
2. Click **New repository**.
3. Name it exactly: `standardchargingllc.com`  
   _(Or any name — but this keeps it clean)_
4. Set to **Public** (required for free GitHub Pages).
5. Click **Create repository**.

---

## Step 2 — Upload the Files

### Option A — GitHub web UI (no terminal needed)

1. In your new repo, click **Add file → Upload files**.
2. Upload `index.html` from `~/.openclaw/workspace/standard_charging/website/`.
3. Commit it.
4. Now you need the Tesla key. GitHub's UI doesn't handle `.well-known/` paths well, so use Option B for that file.

### Option B — Git CLI (recommended, handles hidden folders)

```bash
# One-time setup (if you haven't already):
git config --global user.name "Cameron Sofsky"
git config --global user.email "your@email.com"

# Copy website files to a temp folder
cp -r ~/.openclaw/workspace/standard_charging/website /tmp/scl-site

# Init and push
cd /tmp/scl-site
git init
git add -A          # -A captures .well-known/ hidden dirs
git commit -m "Initial site + Tesla key"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/standardchargingllc.com.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 3 — Enable GitHub Pages

1. In your repo on GitHub, go to **Settings → Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Branch: `main` | Folder: `/ (root)` → click **Save**.
4. GitHub will show: _"Your site is live at https://YOUR_USERNAME.github.io/standardchargingllc.com"_

It usually goes live within **2 minutes**.

---

## Step 4 — Point Your Domain to GitHub Pages

In your domain registrar (GoDaddy, Namecheap, Google Domains, Cloudflare, etc.):

### DNS Records to Add

| Type  | Host | Value                    | TTL  |
|-------|------|--------------------------|------|
| A     | @    | 185.199.108.153          | 3600 |
| A     | @    | 185.199.109.153          | 3600 |
| A     | @    | 185.199.110.153          | 3600 |
| A     | @    | 185.199.111.153          | 3600 |
| CNAME | www  | YOUR_USERNAME.github.io  | 3600 |

> These are GitHub Pages' IP addresses. All four A records are required.

### Back in GitHub Pages Settings

1. Under **Custom domain**, enter: `standardchargingllc.com`
2. Click **Save**.
3. Check **Enforce HTTPS** (appears after DNS propagates — may take up to 48 hrs).

---

## Step 5 — Verify Tesla Key File

Once the domain is live, test this URL in your browser or with curl:

```bash
curl -I https://standardchargingllc.com/.well-known/appspecific/com.tesla.3p.public-key.pem
```

Expected response:
```
HTTP/2 200
content-type: application/x-pem-file  (or text/plain)
```

Also verify the content:
```bash
curl https://standardchargingllc.com/.well-known/appspecific/com.tesla.3p.public-key.pem
```

Should return:
```
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEkLTQHre7NeNIVNwJTMUK9adcpv37
Jlrcm8ngjzeVR3Z4NQ3JkTei7kCYSR71tsiCZ8dQ2ccC8Yjizd1laTslhg==
-----END PUBLIC KEY-----
```

---

## Optional: Add a `_headers` file for strict MIME type (Cloudflare Pages only)

If you ever migrate to Cloudflare Pages, add this file:

**`_headers`**
```
/.well-known/appspecific/com.tesla.3p.public-key.pem
  Content-Type: application/x-pem-file
  Cache-Control: public, max-age=86400
```

GitHub Pages does not need this — it serves the file correctly without headers config.

---

## Summary Checklist

- [ ] GitHub repo created (public)
- [ ] `index.html` uploaded/pushed
- [ ] `.well-known/appspecific/com.tesla.3p.public-key.pem` uploaded/pushed
- [ ] GitHub Pages enabled on `main` branch
- [ ] Custom domain `standardchargingllc.com` set in Pages settings
- [ ] DNS A records pointing to GitHub Pages IPs
- [ ] HTTPS enforced
- [ ] Tesla key URL verified with `curl`

Once all boxes are checked, share the live URL with Ben so Tesla Fleet API registration can be completed.
