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

  // Ensure language switcher images never show broken icon placeholders
  const fixFlags = () => {
    document.querySelectorAll('.gt_switcher img').forEach((img) => {
      img.onerror = () => { img.style.display = 'none'; };
      if (img.complete && img.naturalWidth === 0 && img.src) {
        img.style.display = 'none';
      }
    });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixFlags);
  } else {
    fixFlags();
  }
  setTimeout(fixFlags, 500);
  setTimeout(fixFlags, 1500);

  // ====================================================
  // Mobile / Tablet Header Navigation & Off-Canvas Menu
  // ====================================================
  const initMobileMenu = () => {
    const offCanvas = document.querySelector('.e-off-canvas, #off-canvas-961de85');
    if (!offCanvas) return;

    const openDrawer = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      offCanvas.setAttribute('aria-hidden', 'false');
      offCanvas.removeAttribute('inert');
      offCanvas.classList.add('e-off-canvas--open');
      document.body.classList.add('e-off-canvas__no-scroll');
    };

    const closeDrawer = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      offCanvas.setAttribute('aria-hidden', 'true');
      offCanvas.setAttribute('inert', '');
      offCanvas.classList.remove('e-off-canvas--open');
      document.body.classList.remove('e-off-canvas__no-scroll');
    };

    // Capture-phase listener so it executes BEFORE any library or jQuery handler can intercept
    document.addEventListener(
      'click',
      (e) => {
        const openTrigger = e.target.closest(
          'a[href*="off_canvas:open"], a[href*="off_canvas%3Aopen"], .elementor-element-ad2751a, .elementor-menu-toggle'
        );
        if (openTrigger) {
          openDrawer(e);
          return;
        }

        const closeTrigger = e.target.closest(
          'a[href*="off_canvas:close"], a[href*="off_canvas%3Aclose"], .e-off-canvas__overlay, .elementor-element-eaa777a'
        );
        if (closeTrigger) {
          closeDrawer(e);
          return;
        }

        // Close drawer when clicking a standard page navigation link inside
        const navLink = e.target.closest('.e-off-canvas .elementor-nav-menu a:not(.elementor-item-has-children)');
        if (navLink && !navLink.closest('.menu-item-has-children > a')) {
          setTimeout(closeDrawer, 180);
        }
      },
      true
    );

    // Support touch devices directly
    document.addEventListener(
      'touchend',
      (e) => {
        const openTrigger = e.target.closest(
          'a[href*="off_canvas:open"], a[href*="off_canvas%3Aopen"], .elementor-element-ad2751a, .elementor-menu-toggle'
        );
        if (openTrigger && !offCanvas.classList.contains('e-off-canvas--open')) {
          openDrawer(e);
        }
      },
      { passive: false }
    );

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && offCanvas.classList.contains('e-off-canvas--open')) {
        closeDrawer(e);
      }
    });

    // Submenu accordion toggle inside Off-Canvas
    offCanvas.addEventListener('click', (e) => {
      const parentLink = e.target.closest('.menu-item-has-children > a');
      if (parentLink) {
        const menuItem = parentLink.parentElement;
        const subMenu = menuItem.querySelector('.sub-menu');
        if (subMenu) {
          const isOpen = menuItem.classList.contains('submenu-open');
          if (!isOpen || e.target.closest('.sub-arrow')) {
            e.preventDefault();
            e.stopPropagation();
            menuItem.classList.toggle('submenu-open');
          }
        }
      }
    });

    // Also register Elementor URL actions if elementorFrontend is present
    const registerElementorActions = () => {
      if (window.elementorFrontend && window.elementorFrontend.utils && window.elementorFrontend.utils.urlActions) {
        try {
          window.elementorFrontend.utils.urlActions.addAction('off_canvas:open', () => openDrawer());
          window.elementorFrontend.utils.urlActions.addAction('off_canvas:close', () => closeDrawer());
        } catch (_) {}
      }
    };
    registerElementorActions();
    setTimeout(registerElementorActions, 500);
    setTimeout(registerElementorActions, 1500);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
