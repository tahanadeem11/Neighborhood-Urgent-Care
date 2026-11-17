/* Mobile menu: slide-in sidebar helpers (body scroll lock + backdrop state) */
(function () {
  var menu = document.getElementById('navbarContent');
  if (!menu) return;
  menu.addEventListener('show.bs.collapse', function () { document.body.classList.add('menu-open'); });
  menu.addEventListener('hide.bs.collapse', function () { document.body.classList.remove('menu-open'); });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 992) document.body.classList.remove('menu-open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('show')) {
      var t = document.querySelector('.navbar-toggler');
      if (t) t.click();
    }
  });
})();
