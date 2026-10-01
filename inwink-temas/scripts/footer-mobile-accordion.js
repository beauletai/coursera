/* South Summit · Footer: acordeón solo en móvil (<=600px)
   Pegar en BO > Herramientas webmaster > Scripts globales (bloque NUEVO, afterBody).
   Va junto al estilo global "mcp-footer-mobile-accordion", que ya está en la preview. */
(function () {
  try {
    var BLOC = 'bl-027bea74-4728-42e0-a43e-35c5ec121bfe';
    var COLS = ['79fee68a-e4b2-4050-c14e-ecbd6527c9c6', '7d109955-6fd2-4421-9f41-a59f418eb7b4', '1c4a2f2c-114e-4f34-be47-597fada8f4bc', 'cc54f96a-6026-4dd2-a094-352567389d2c'];
    var mq = window.matchMedia('(max-width: 600px)');
    var root = document.documentElement;

    function col(el) {
      var c = el && el.closest ? el.closest('[id^="ct-"]') : null;
      return c && COLS.indexOf(c.id.slice(3)) > -1 && c.closest('#' + BLOC) ? c : null;
    }

    function sync() {
      var on = mq.matches;
      root.classList.toggle('ss-acc-on', on);
      COLS.forEach(function (id) {
        var c = document.getElementById('ct-' + id);
        var h = c && c.querySelector('.bloc-header');
        if (!h) return;
        if (on) {
          if (!h.hasAttribute('role')) {
            h.setAttribute('role', 'button');
            h.setAttribute('tabindex', '0');
            h.setAttribute('aria-expanded', c.classList.contains('is-open') ? 'true' : 'false');
          }
        } else if (h.getAttribute('role') === 'button') {
          h.removeAttribute('role');
          h.removeAttribute('tabindex');
          h.removeAttribute('aria-expanded');
        }
      });
    }

    function toggle(e) {
      if (!mq.matches) return;
      var h = e.target.closest ? e.target.closest('.bloc-header') : null;
      var c = col(h);
      if (!h || !c) return;
      if (e.type === 'keydown') {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
      }
      var open = c.classList.toggle('is-open');
      h.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    document.addEventListener('click', toggle);
    document.addEventListener('keydown', toggle);
    if (mq.addEventListener) { mq.addEventListener('change', sync); } else if (mq.addListener) { mq.addListener(sync); }
    sync();
    new MutationObserver(function () { sync(); }).observe(document.body, { childList: true, subtree: true });
  } catch (err) { /* no romper la página */ }
})();
