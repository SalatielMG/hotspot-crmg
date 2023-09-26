import {
  handleShowModal,
  openDetailAdd,
  setCurrentIndexMainAdd
} from './add-util.js';
import {
  onInitScannerQrCode
} from './qr-code/qr-code.util.js';
import {
  ENVIRONMENT
} from './conf/environment.js'

let indexImgBody = 0;
let ElementEyePassword;
let ElementBTnScannerQr;
const ElementBtnFreeTrial = document.querySelector('.btn-free-trial');
const ElementBtnNormalLogin = document.querySelector('.btn-normal-login');

const ElementCarouselContainer = document.getElementById('carousel-crmg-container');
const ElementOptionFormChoose = document.getElementById('option-form-choose');
const ElementFormLoginCrmg = document.getElementById('form-login-crmg');
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
  ENVIRONMENT.banner.items.forEach(({
    srcImg,
    title,
    whatsapp
  }, index) => {
    items = `${items}<div class="item carousel-item" id="itemAdd-${index}">
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
  ElementCarouselContainer.addEventListener('dblclick', openDetailAdd);
}

$(document).ready(function () {
  handleItemsCarrousel();
  $('#carousel-crmg-container').owlCarousel({
    ...ENVIRONMENT.banner.carouselConfig,
    onChanged: onChangedCarouselMainAdds
  });
  handleValidateImplAdd();
  handleQueryParams();
});

const onChangedCarouselMainAdds = (e) => {
  setTimeout(() => {
    const currentActive = e.currentTarget.querySelector('.owl-item.active');
    if (!currentActive) {
      return;
    }
    const carouselItem = currentActive.querySelector('.item.carousel-item');
    if (!carouselItem) {
      return;
    }
    const dataSplit = carouselItem.id.split('-');
    setCurrentIndexMainAdd(dataSplit.length > 1 ? Number(dataSplit[1]) : 0);
  }, 100);
}

const handleValidateImplAdd = () => {
  if (!ENVIRONMENT?.adds?.enabled) {
    showNormalForm();
    return;
  }
  if (ENVIRONMENT?.adds.type === 'DEFAULT') {
    showNormalForm();
    return;
  }
  const textBtnFreeTrial = ENVIRONMENT?.adds?.textBtnFreeTrial ? ENVIRONMENT.adds.textBtnFreeTrial : 'Conéctese gratis';
  ElementBtnFreeTrial.innerHTML = `
    <strong>${textBtnFreeTrial}</strong>
  `
  handleListenerActionOptionForm();
}

const handleListenerActionOptionForm = () => {
  ElementBtnNormalLogin.addEventListener('click', showNormalForm);
}

const showNormalForm = () => {
  hiddenOptionFormChoose();
  ElementFormLoginCrmg.innerHTML = `${ElementFormLoginCrmg.innerHTML} ${innerHtmlNormalForm()}`;
  ElementEyePassword = document.getElementById('eyePassword');
  ElementBTnScannerQr = document.querySelector('.btn-scanner-qr');
  ElementEyePassword.addEventListener('click', handlePass);
  ElementBTnScannerQr.addEventListener('click', onInitScannerQrCode);
}

const hiddenOptionFormChoose = () => {
  ElementOptionFormChoose.style.display = 'none';
}

const innerHtmlNormalForm = () =>
`
<label>
  <img class="ico" src="img/user.svg" alt="#" />
  <input
    name="username"
    type="text"
    value="$(username)"
    placeholder="Usuario"
  />
</label>

<label>
  <img class="ico" src="img/password.svg" alt="#" />
  <input
    id="password"
    name="password"
    type="password"
    placeholder="Contraseña"
  />
  <img
    id="eyePassword"
    class="ico-eye"
    src="img/password-on.svg"
    alt="#"
  />
</label>

<input type="submit" value="Ingresar" />

<button
  class="btn-scanner-qr"
  type="button"
>
  Escanear código <strong>QR</strong>
</button>
`;

const handleBodyBackground = () => {
  const {
    timeoutChange
  } = ENVIRONMENT.bodySrcImg;
  let seconds = 0;
  setInterval(() => {
    if (seconds % timeoutChange === 0) {
      determineSrcImgBody();
    }
    seconds++;
  }, 1000);
}

const handleFadeInImgBody = (
  isSetProperties = true
) => {
  const {
    timeoutFadeIn
  } = ENVIRONMENT.bodySrcImg;
  [
    '-webkit-animation',
    '-moz-animation',
    '-ms-animation',
    '-o-animation',
    'animation'
  ].forEach(property => {
    if (isSetProperties) {
      document.body.style.setProperty(property, `fadein ${timeoutFadeIn}s`);
    } else {
      document.body.style.removeProperty(property);
    }
  });
}

const determineSrcImgBody = () => {
  
  const {
    desktop,
    movil,
    timeoutFadeIn,
    enabledAnimationFadeId
  } = ENVIRONMENT.bodySrcImg;
  const width = Number(window.innerWidth);
  const srcImgs = width >= 1 && width <= 575 ? movil : desktop;
  indexImgBody = (indexImgBody > (srcImgs.length - 1)) ? 0 : indexImgBody;
  const srcImg = srcImgs[indexImgBody];
  document.body.style.backgroundImage = `url('${srcImg}')`;
  indexImgBody ++;
  if (!enabledAnimationFadeId) {
    return;
  }
  const secondsFadeIn = 0;
  handleFadeInImgBody();
  const intervalFadeIn = setInterval(() => {
    if (intervalFadeIn >= timeoutFadeIn) {
      handleFadeInImgBody(false);
      clearInterval(intervalFadeIn);
      return;
    }
    secondsFadeIn++;
  }, 1000);
}

handleBodyBackground();
window.onresize = determineSrcImgBody;