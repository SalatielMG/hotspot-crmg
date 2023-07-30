import { CAROUSEL_ITEMS } from './const/carousel-items.js';
import {
  handleShowModal,
  openDetailAdd
} from './add-util.js';
import {
  onInitScannerQrCode
} from './qr-code/qr-code.util.js';

const ElementEyePassword = document.getElementById('eyePassword');
const ElementCarouselContainer = document.getElementById('carousel-crmg-container');
const ElementBTnScannerQr = document.querySelector('.btn-scanner-qr');
let showPass = false;

const handlePass = () => {
  showPass = !showPass;
  const inputPassword = document.getElementById('password');
  inputPassword.setAttribute('type', showPass ? 'text' : 'password');
  ElementEyePassword.setAttribute(
    'src',
    `img/password-${showPass ? 'off' : 'on'}.svg`
  );
};

const handleQueryParams = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has('username') && urlParams.has('password')) {
    const username = urlParams.get('username');
    const password = urlParams.get('password');
    document.login.username.value = username;
    document.login.password.value = password;
    doLogin();
  } else {
    handleShowModal();
  }
};

const handleItemsCarrousel = () => {
  let items = '';
  CAROUSEL_ITEMS.forEach(({
    srcImg,
    title,
    whatsapp
  }) => {
    items = `${items}<div class="item carousel-item">
      <img src="${srcImg}" />
      <div class="item-container">
        <h1>${title}</h1>
      </div>
      
      <div class="contact-info">
        <img src="./img/whatshapp.png" alt="#" />
        <p>${whatsapp}</p>
      </div>
    </div>`
  });
  ElementCarouselContainer.innerHTML = items;
  ElementCarouselContainer.addEventListener('click', openDetailAdd);
}

$(document).ready(function () {
  handleItemsCarrousel();
  $('.owl-carousel').owlCarousel({
    // nav: true,
    items: 1.0001,
    loop: true,
    animateOut: "fadeOut",
    animateIn: "flipInX",
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
  });
  ElementEyePassword.addEventListener('click', handlePass);
  ElementBTnScannerQr.addEventListener('click', onInitScannerQrCode);
  handleQueryParams();
});

