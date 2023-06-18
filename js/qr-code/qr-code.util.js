const ElementModalQR = document.getElementById('modalQr');
const ElementCloseModalQR = document.getElementById('closeModalQr');

const html5QrCode = new Html5Qrcode("qr-reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
};

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
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    window.open('intent://salatielmg.github.io/hotspot-crmg#Intent;scheme=https;package=com.android.chrome;end');
  } else {
    window.open('https://salatielmg.github.io/hotspot-crmg');
  }
};