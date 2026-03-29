# Squarespace Implementation — Standard Charging LLC

## Goal
Implement the new Apple-style marketing experience directly inside your existing Squarespace site.

## 1) Global Site Styles (Design → Custom CSS)
Paste from `squarespace-custom.css` into **Design → Custom CSS**.

## 2) Build Page Sections (Pages → Website)
Create page: **/for-hosts-and-sponsors**

Add sections in this order using Squarespace blocks:
1. Hero (Text + Buttons)
2. 3-column Problem cards
3. 2x2 Solution cards
4. Economics table section
5. Roadmap section
6. Payment section with 3 buttons
7. Contact form section

## 3) Payment Buttons
Use Stripe Payment Links in button URLs:
- Host Pilot Deposit
- Sponsor Package
- Ops Plan

## 4) Contact Form
Use native Squarespace Form Block:
Fields: Name, Email, Company, Role, Message
Storage: Email notifications + Google Sheets (if connected)

## 5) SEO
Page title:
- "Standard Charging LLC | Sponsor-Friendly EV Charging in Oregon"
Meta description:
- "Turnkey Level 2 EV charging for Oregon businesses with sponsor-funded charging windows and measurable ROI."

## 6) Publish Checklist
- [ ] CSS applied
- [ ] Payment links live
- [ ] Contact form sending
- [ ] Mobile spacing checked
- [ ] SEO title/description set
