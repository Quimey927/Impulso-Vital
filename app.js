const nav = document.querySelector('.navbar');

function changeBackground() {
  if (window.pageYOffset > 50) {
    nav.classList.add('navbar-scrolled');
  } else {
    nav.classList.remove('navbar-scrolled');
  }
}

window.addEventListener('scroll', changeBackground);
