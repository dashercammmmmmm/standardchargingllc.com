# Standard Charging LLC Website (Apple-style landing + payments)

## What this includes
- Clean Apple-like UI landing page
- Business summary + economics + roadmap sections
- Payment buttons wired for Stripe Payment Links
- Contact inquiry form (mailto-based MVP)

## Files
- `index.html`
- `styles.css`
- `app.js`
- `config.js`

## Configure payments
1. In Stripe, create 3 Payment Links:
   - Host Pilot Deposit
   - Sponsor Package
   - Operations Plan
2. Replace URLs in `config.js`.
3. Replace `contactEmail` in `config.js`.

## Local preview
```bash
cd ~/.openclaw/workspace/projects/standard-charging-website
python3 -m http.server 8080
```
Open: `http://localhost:8080`

## Deploy options
- Netlify drag-and-drop folder
- Vercel static deployment
- Cloudflare Pages

## Notes
This is a production-ready MVP marketing site. For full embedded card processing + CRM capture, add a backend (Stripe Checkout Sessions + webhook + lead database).
