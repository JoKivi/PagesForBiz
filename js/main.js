// Hero scroll zoom fade in 
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

window.onload = function() {
  var gdpr = getCookie('gdpr');
  if (gdpr != 'accept' && gdpr != 'decline') {
    showGdprPopup();
  }
}

function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for(var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if(name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

document.getElementById('gdpr-accept').addEventListener('click', acceptCookies);
document.getElementById('gdpr-decline').addEventListener('click', declineCookies);

