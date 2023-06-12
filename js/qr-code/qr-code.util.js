const ElementModalQR = document.getElementById('modalQr');
const ElementCloseModalQR = document.getElementById('closeModalQr');

const html5QrCode = new Html5Qrcode("qr-reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
  console.log('successCode', {
    decodedText,
    decodedResult
  });
  document.login.username.value = 'salatiel';
  document.login.password.value = '123456';
  window.location = `http://fichas.pruebas/login?dst=http://www.msftconnecttest.com/redirect&username=${document.login.username.value}&password=${document.login.password.value}`;
  // doLogin();
};
const fetchLoginPost = () => {
  try {
    let formData = new FormData();
    formData.append('username', document.sendin.username.value);
    formData.append('password', document.sendin.password.value);
    formData.append('dst', 'http://www.msftconnecttest.com/redirect');
    formData.append('popup', true);
    fetch('http://fichas.pruebas/login', {
      method: 'post',
      body: formData
    }).then(() => {
      console.log('Sesion iniciada correctamente');
    }).catch(ErrorLogin)
  } catch(error) {
    ErrorLogin(error);
  }
}

const ErrorLogin = (error) => {
  console.error('error login', error);
}

const config = { fps: 10, qrbox: { width: 250, height: 250 } };

const showModalQr = () => {
  ElementModalQR.style.visibility = 'visible';
  // ElementFormLogin.style.visibility = 'hidden';
    ElementCloseModalQR.addEventListener('click', closeModalQr);
}

const closeModalQr = () => {
  ElementModalQR.style.visibility = 'hidden';
  html5QrCode.stop().then((ignore) => {
    // QR Code scanning is stopped.
  }).catch((err) => {
    // Stop failed, handle it.
  });
  // ElementFormLogin.style.visibility = 'visible';
}

const onInitScannerQrCode = () => {
  showModalQr();
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);
  } else {
    html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);
  }
  setTimeout(() => {
    qrCodeSuccessCallback('', '');
  }, 2000);
};

onInitScannerQrCode();
