(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('[data-theme-toggle]');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function resolvedTheme() {
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return media.matches ? 'dark' : 'light';
  }

  function syncToggle() {
    if (!toggle) return;
    var dark = resolvedTheme() === 'dark';
    toggle.setAttribute('aria-checked', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = resolvedTheme() === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      root.setAttribute('data-theme', next);
      syncToggle();
    });
  }

  media.addEventListener('change', function () {
    if (!localStorage.getItem('theme')) {
      root.setAttribute('data-theme', media.matches ? 'dark' : 'light');
      syncToggle();
    }
  });

  syncToggle();
})();
