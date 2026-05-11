(function () {
  const defaultEndpoint = 'https://formsubmit.co/ajax/cam@standardchargingllc.com';
  const defaultEmail = 'cam@standardchargingllc.com';

  function statusFor(form) {
    const id = form.getAttribute('aria-describedby');
    if (id) return document.getElementById(id);
    return form.querySelector('[data-form-status]');
  }

  function setStatus(form, message) {
    const target = statusFor(form);
    if (target) target.textContent = message;
  }

  async function submitForm(form) {
    const endpoint = form.dataset.endpoint || form.getAttribute('action') || defaultEndpoint;
    const response = await fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (!response.ok) {
      let detail = '';
      try {
        const json = await response.json();
        detail = json && json.message ? ` ${json.message}` : '';
      } catch (_) {}
      throw new Error(`Form delivery failed.${detail}`);
    }
  }

  function bindForms() {
    document.querySelectorAll('form[data-email-form]').forEach((form) => {
      if (form.dataset.emailFormBound === 'true') return;
      form.dataset.emailFormBound = 'true';
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        setStatus(form, 'Sending…');
        try {
          await submitForm(form);
          form.reset();
          setStatus(form, 'Thanks — your message was sent.');
        } catch (error) {
          setStatus(form, `Could not send from the page yet. Please email ${defaultEmail}.`);
          console.error(error);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindForms);
  } else {
    bindForms();
  }
})();
