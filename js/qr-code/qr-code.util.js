const ElementModalQR = document.getElementById('modalQr');
const ElementCloseModalQR = document.getElementById('closeModalQr');

const html5QrCode = new Html5Qrcode("qr-reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
  console.log('successCode', {
    decodedText,
    decodedResult
  });
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
  showModalQr();
  html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);
};

onInitScannerQrCode();
