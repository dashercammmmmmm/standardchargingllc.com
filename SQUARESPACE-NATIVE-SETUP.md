# Squarespace Native Setup (No outbound JS dependencies)

Use this when external scripts/traffic are restricted.

## 1) Add custom CSS
In Squarespace: **Design → Custom CSS**
Paste contents of:
- `squarespace-native-custom.css`

## 2) Build page
Choose one of two methods:

### Method A (fastest): single paste
- Add one Code Block and paste:
  - `squarespace-native-full-page.html`

### Method B: section-by-section
Create/edit your page and add one **Code Block** for each section in this order:
1. Hero
2. Problem cards
3. Solution cards
4. Economics table
5. Roadmap
6. Payments
7. Contact note

Use snippets from:
- `squarespace-native-sections.html`

## 3) Payment links
Replace placeholders in the Payment section:
- `https://buy.stripe.com/replace-host-deposit`
- `https://buy.stripe.com/replace-sponsor-package`
- `https://buy.stripe.com/replace-ops-plan`

These are direct links (no JS required).

## 4) Contact
Use Squarespace **Form Block** (native) with fields:
- Name
- Email
- Company
- Role
- Message

## 5) SEO
Title:
- Standard Charging LLC | Sponsor-Friendly EV Charging in Oregon

Description:
- Turnkey Level 2 EV charging for Oregon businesses with sponsor-funded charging windows and measurable ROI.

## Publish checklist
- [ ] CSS applied
- [ ] All sections rendered correctly on mobile
- [ ] Stripe links tested
- [ ] Form submission tested
- [ ] SEO title/description set
