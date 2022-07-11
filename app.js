// Adding background to the scrolled nav

const nav = document.querySelector('.navbar');

function changeBackground() {
  if (window.pageYOffset > 50) {
    nav.classList.add('navbar-scrolled');
  } else {
    nav.classList.remove('navbar-scrolled');
  }
}

window.addEventListener('scroll', changeBackground);

// Random lightning

const images = document.querySelectorAll('.image');

setInterval(() => {
  for (let image of images) {
    image.classList.remove('illuminated');
  }
  const index = Math.floor(Math.random() * 6);
  images[index].classList.add('illuminated');
}, 2000);
