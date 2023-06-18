let showPass = false;

const handlePass = () => {
  showPass = !showPass;
  const eyePassword = document.getElementById('eyePassword');
  const inputPassword = document.getElementById('password');
  inputPassword.setAttribute('type', showPass ? 'text' : 'password');
  eyePassword.setAttribute(
    'src',
    `img/password-${showPass ? 'off' : 'on'}.svg`
  );
};

const handleQueryParams = () => {
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has('username') && urlParams.has('password')) {
    const username = urlParams.get('username');
    const password = urlParams.get('password');
    document.login.username.value = username;
    document.login.password.value = password;
    doLogin();
  };
};

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    // nav: true,
    items: 1.0001,
    loop: true,
    animateOut: "fadeOut",
    animateIn: "flipInX",
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });
  handleQueryParams();
});
