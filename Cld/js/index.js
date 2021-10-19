document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#header__menu').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  });
});
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__menu').addEventListener('click', function() {
    document.querySelector('.header__menu__logo').classList.toggle('is-close');
  });
});
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content-active').forEach(function(tabContent) {
        tabContent.classList.remove('how__flex');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('how__flex');
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how__link').forEach(function(tabs) {
    tabs.addEventListener('click', function(click) {
      const btn = click.currentTarget.dataset.path;
      document.querySelectorAll('.how__link').forEach(function(tab) {
        tab.classList.remove('tab-item-active');
      });
      document.querySelector(`[data-path="${btn}"]`).classList.add('tab-item-active');
    });
  });
});
