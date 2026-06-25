(function() {
  function forceFullWidth() {
    var root = document.getElementById('bws-home-root');
    if (!root) return;
    var el = root.parentElement;
    while (el && el !== document.body) {
      el.style.setProperty('width','100%','important');
      el.style.setProperty('max-width','100%','important');
      el.style.setProperty('padding-left','0','important');
      el.style.setProperty('padding-right','0','important');
      el.style.setProperty('margin-left','0','important');
      el.style.setProperty('margin-right','0','important');
      el = el.parentElement;
    }
    if (document.body) {
      document.body.style.setProperty('width','100%','important');
      document.body.style.setProperty('max-width','100%','important');
      document.body.style.setProperty('margin','0','important');
      document.body.style.setProperty('padding','0','important');
    }
  }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', forceFullWidth) : forceFullWidth();
  window.addEventListener('load', function() { setTimeout(forceFullWidth, 250); });
})();

(function() {
  var nav = document.getElementById('bwsNav');
  if (nav) window.addEventListener('scroll', function() { nav.classList.toggle('scrolled', window.scrollY > 20); }, { passive: true });
})();

(function() {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function() { menu.classList.toggle('open'); });
  document.addEventListener('click', function(e) { if (!toggle.contains(e.target) && !menu.contains(e.target)) menu.classList.remove('open'); });
})();
