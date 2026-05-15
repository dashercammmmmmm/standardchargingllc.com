# Standard Charging website

Current public site source for Standard Charging.

## Public positioning
- Brand: Standard Charging publicly; Standard Charging LLC in footer/legal contexts.
- Story: sponsor-supported public Level 2 EV charging, starting around Albany and reviewing other Oregon communities based on real host/sponsor fit.
- Do not publish private economics, checkout flows, package-amount tables, unverified live-site claims, or hard expansion timelines without approval.

## Current important files
- `index.html` — homepage
- `partners.html` — sponsor packages and application interest form
- `locations.html` — Albany-first / open city nomination page
- `about.html` — founder story and company model
- `contact.html` — contact card and inquiry form
- `journal.html` — visible Updates page label retained at old URL until route rename is approved
- `assets/founder-cam-maryspk.jpg` — founder photo

## Forms and payments
This public site should use inquiry-first forms. Do not add public checkout flows or public package amounts unless Cam explicitly approves them.

## Local preview
```bash
python3 -m http.server 8096 --bind 127.0.0.1 --directory /Users/benjaminfranklinautomation/.openclaw/workspace/standard_charging/website
```
