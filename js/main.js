setTimeout(function() {
  const heroText = document.querySelector('.hero-text');
  heroText.removeAttribute('hidden');
}, 200);

// Animaatio
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

  $('.fade-zoom-in').each(function () {
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

  // SERVICES
  const thumbnailLinks = document.querySelectorAll('.d-flex');

  thumbnailLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const pageId = link.dataset.id;
      window.open(`${pageId}.html`, "_self");
    });
  });


  // STICKY BACK-TO-TOP
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.documentElement.scrollTop > 1000) {
      document.querySelector(".back-to-top").style.display = "block";
    } else {
      document.querySelector(".back-to-top").style.display = "none";
    }
  }

