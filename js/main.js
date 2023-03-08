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

  $(window).on('scroll', checkIfInView);
}

$('.fade-zoom-in').each(function() {
  animateElementOnScroll(this, 'animate');
});

// GDPR
document.getElementById('gdpr-accept').addEventListener('click', acceptCookies);
document.getElementById('gdpr-decline').addEventListener('click', declineCookies);

window.onload = function () {
  var gdpr = getCookie('gdpr');
  if (gdpr != 'decline' && gdpr != 'accept') {
    showGdprPopup();
  }
}

function showGdprPopup() {
  var gdprPopup = document.getElementById('gdpr-container');
  gdprPopup.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function acceptCookies() {
  document.cookie = "gdpr=accept; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  var gdprPopup = document.getElementById('gdpr-container');
  gdprPopup.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function declineCookies() {
  document.cookie = "gdpr=decline; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  var gdprPopup = document.getElementById('gdpr-container');
  gdprPopup.style.display = 'none';
  document.body.style.overflow = 'auto';
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

// Galleria
const openGallery = () => {
  window.open("gallery.html", "_self");
};

const openGalleryButton = document.getElementById("openGalleryButton");
openGalleryButton.addEventListener("click", openGallery);


// //DJ-Karaoke
// const openDJ = () => {
//   window.open("dj.html", "_blank");
// };

// const openDjThumbnail = document.getElementById("dj");
// openDjThumbnail.addEventListener("click", openDJ);

// //Esitystekniikka
// const openEsitys = () => {
//   window.open("esitys.html", "_blank");
// };

// const openEsitysThumbnail = document.getElementById("esitys");
// openEsitysThumbnail.addEventListener("click", openEsitys);

// //Tapahtumatuotanto
// const openTapahtuma = () => {
//   window.open("tapahtuma.html", "_blank");
// };

// const openTapahtumaThumbnail = document.getElementById("tapahtuma");
// openTapahtumaThumbnail.addEventListener("click", openTapahtuma);

// //Erikoisohjelmat
// const openErikois = () => {
//   window.open("erikois.html", "_blank");
// };

// const openErikoisThumbnail = document.getElementById("erikois");
// openErikoisThumbnail.addEventListener("click", openErikois);

// //Haat
// const openHaat = () => {
//   window.open("haat.html", "_blank");
// };

// const openHaatThumbnail = document.getElementById("haat");
// openHaatThumbnail.addEventListener("click", openHaat);


const thumbnailLinks = document.querySelectorAll('.d-flex');

thumbnailLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const pageId = link.dataset.id;
    window.open(`${pageId}.html`, "_self");
  });
});

// Gallery
const galleryContainer = document.getElementById('gallery-container');

const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/gallery.json');
xhr.onload = () => {
  if (xhr.status == 200) { //200 on hyväksytty vastaus
    const data = JSON.parse(xhr.responseText);
    console.log(data.gallery);

    for (const image of data.gallery) {
      const img = document.createElement('img');
      img.src = 'gallery/' + image.filename;
      img.alt = image.alt;
      const caption = document.createElement('div');
      caption.innerText = image.caption;
      const container = document.createElement('div');
      container.classList.add('image-container');
      container.appendChild(img);
      container.appendChild(caption);
      galleryContainer.appendChild(container);
    }
  } else {
    console.error(`Virhe ladattaessa JSON dataa: ${xhr.status}`);
  }
};
xhr.send();


