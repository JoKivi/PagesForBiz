const element = document.querySelector('.fade-zoom-in');

function animateElementOnScroll() {
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;

  if (elementTop < window.innerHeight && elementBottom >= 0) {
    element.classList.add('animate');
  } else {
    element.classList.remove('animate');
  }
}

window.addEventListener('scroll', animateElementOnScroll);
