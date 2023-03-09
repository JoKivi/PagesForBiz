//BOOTSTRAP
$(document).ready(function () {
  $(".bootstrap").load("injectors/bootstrap.html");
});

// HEADER
$(document).ready(function() {
  $("header").load("injectors/header.html");
});

// FOOTER
$(document).ready(function() {
  $("footer").load("injectors/footer.html");
});

// STICKY BUTTONS
$(function() {
  var $sticky = $(".sticky");
  $sticky.html('<div><button class="sticky" id="sticky-phone"><i class="fa fa-phone"></i></button><button class="sticky" id="sticky-email"><i class="fa fa-envelope"></i></button></div>');

  $sticky.on("click", "#sticky-phone", function() {
    window.location.href = "tel:+358405455417";
  });

  $sticky.on("click", "#sticky-email", function() {
    window.location.href = "mailto:samppa@liventer.fi";
  });
});




