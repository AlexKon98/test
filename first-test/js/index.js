window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#header-menu').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('show');
    document.querySelector('#header-menu').classList.toggle('is-close');
  });
});
