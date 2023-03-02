// Scroll fade in 
function animateElementOnScroll(element, animationClass) {
  function checkIfInView() {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom >= 0) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  }

  window.addEventListener('scroll', checkIfInView);
}

const fadeZoomInElements = document.querySelectorAll('.fade-zoom-in');
fadeZoomInElements.forEach((element) => {
  animateElementOnScroll(element, 'animate');
});

// GDPR
function showGdprPopup() {
  var gdprPopup = document.getElementById('gdpr-popup');
  gdprPopup.style.display = 'block';
}

function acceptCookies() {
  document.cookie = "gdpr=accept; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  var gdprPopup = document.getElementById('gdpr-popup');
  gdprPopup.style.display = 'none';
}

function declineCookies() {
  document.cookie = "gdpr=decline; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  var gdprPopup = document.getElementById('gdpr-popup');
  gdprPopup.style.display = 'none';
}

window.onload = function () {
  var gdpr = getCookie('gdpr');
  if (gdpr != 'accept' && gdpr != 'decline') {
    showGdprPopup();
  }
}

function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

document.getElementById('gdpr-accept').addEventListener('click', acceptCookies);
document.getElementById('gdpr-decline').addEventListener('click', declineCookies);

// JSON gallery
const openGalleryButton = document.getElementById('openGalleryButton');

// Luodaan uusi ikkuna
openGalleryButton.addEventListener('click', function () {
  const galleryWindow = window.open('', 'galleryWindow', 'width=800,height=600');

  // Haetaan uudelle ikkunalle HTML
  fetch('gallery.html')
    .then(response => response.text()) // Muuttaa saadun tiedon tekstiksi
    .then(html => { // "lupaus" nimeltä html
      galleryWindow.document.write(html); // kutsuu muuttujan ja kirjoittaa uuteen ikkunaan html tekstin
    })
    .catch(error => console.error("Virhe haettaessa galleriaa",error)); // konsoliin ilmoitus virheestä
});
