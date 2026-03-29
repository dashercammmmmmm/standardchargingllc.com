document.getElementById('year').textContent = new Date().getFullYear();

const links = (window.STANDARD_CHARGING_CONFIG && window.STANDARD_CHARGING_CONFIG.paymentLinks) || {};

document.querySelectorAll('[data-link]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.link;
    const href = links[key];
    if (!href || href.includes('replace-me')) {
      alert('Payment link not configured yet. Add live Stripe links in config.js');
      return;
    }
    window.open(href, '_blank', 'noopener,noreferrer');
  });
});

const form = document.getElementById('leadForm');
const msg = document.getElementById('leadMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const email = window.STANDARD_CHARGING_CONFIG?.contactEmail || 'hello@standardchargingllc.com';
  const subject = encodeURIComponent('Standard Charging Website Inquiry');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\nRole: ${data.get('role')}\n\nMessage:\n${data.get('message')}`
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  msg.textContent = 'Launching email draft...';
});
