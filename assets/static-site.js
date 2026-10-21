/* Static-export helper. Original layout/styles are preserved; only replaces the WordPress form endpoint. */
(() => {
  document.addEventListener('submit', (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.classList.contains('elementor-form')) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const values = new FormData(form);
    const get = (name) => String(values.get(name) || '').trim();
    const subject = 'Beacon Health website enquiry';
    const body = [
      `Name: ${get('form_fields[name]')}`,
      `Email: ${get('form_fields[email]')}`,
      `Company/Organisation: ${get('form_fields[field_433111c]')}`,
      `Interested in: ${get('form_fields[field_0eba8e5]')}`,
      '',
      'Message:',
      get('form_fields[message]')
    ].join('\n');
    const notice = document.createElement('p');
    notice.className = 'static-form-notice';
    notice.setAttribute('role', 'status');
    notice.textContent = 'Your email application will open with this enquiry ready to send. If it does not open, email Abc@gmail.com directly.';
    form.insertAdjacentElement('afterend', notice);
    window.location.href = `mailto:Abc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, true);
})();
