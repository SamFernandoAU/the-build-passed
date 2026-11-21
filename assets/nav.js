/* Floating navigation for the-build-passed.
   Highlights the myth in view, closes the menu after a choice, and shows the
   back-to-top button once you've scrolled. The page works without this file. */
(function () {
  'use strict';
  var nav = document.querySelector('.fnav');
  if (!nav) return;
  var menu = nav.querySelector('.fmenu');
  var links = nav.querySelectorAll('a[data-target]');
  var myths = document.querySelectorAll('section.myth');
  var body = document.body;
  body.classList.add('js');

  function setActive(id) {
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-target') === id) links[i].setAttribute('aria-current', 'true');
      else links[i].removeAttribute('aria-current');
    }
  }

  // Highlight the myth whose section crosses the middle of the screen.
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    myths.forEach(function (m) { io.observe(m); });
  }

  // Show the floating controls after the hero; clear the highlight outside the myths.
  var first = myths[0], last = myths[myths.length - 1];
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    body.classList.toggle('scrolled', y > 500);
    if (first && last) {
      var mid = y + window.innerHeight / 2;
      if (mid < first.offsetTop || mid > last.offsetTop + last.offsetHeight) setActive(null);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Close the menu after picking an item, on Escape, or on a click outside it.
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('.fpanel a')) menu.open = false;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
    });
    document.addEventListener('click', function (e) {
      if (menu.open && !menu.contains(e.target)) menu.open = false;
    });
  }
})();
