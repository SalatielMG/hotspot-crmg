let showPass = false;

const handlePass = () => {
  showPass = !showPass;
  const eyePassword = document.getElementById("eyePassword");
  const inputPassword = document.getElementById("password");
  inputPassword.setAttribute("type", showPass ? "text" : "password");
  eyePassword.setAttribute(
    "src",
    `img/password-${showPass ? "off" : "on"}.svg`
  );
};

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // nav: true,
    items: 1.0001,
    loop: true,
    animateOut: "fadeOut",
    animateIn: "flipInX",
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });
});
