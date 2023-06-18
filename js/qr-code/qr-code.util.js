const ElementModalQR = document.getElementById('modalQr');
const ElementCloseModalQR = document.getElementById('closeModalQr');
const ElementSelectorCamera = document.getElementById('selectorCamera');
const ElementContainerControlCamera = document.querySelector('.controls-camera-container')
const ElementButtonGoBack = document.querySelector('.return-back')
const ElementLoadingCamera = document.querySelector('.spinner');
const ELEMENT_QR_CODE_WRAPPER = document.querySelector('.qr-code-wrapper');
const ELEMENT_NOT_QR_CODE_WRAPPER = document.querySelector('.not-qr-code-wrapper');

const html5QrCode = new Html5Qrcode('qr-reader');
let cameras = [];
let cameraActiveId = null;
let statusQrCode = {
  loading: true,
  isEnabled: false
}
let secondsLeftGoBack = 20;
let intervalIdGoBack = null;

const qrCodeSuccessCallback = async (decodedText) => {
  if (decodedText) {
    await stopCamera();
    window.location = `${decodedText}&dst=https://www.google.com.mx`;
  }
};

const ErrorLogin = (error) => {
  console.error('error login', error);
}

const config = { fps: 10, qrbox: { width: 250, height: 250 } };

const showModalQr = () => {
  ElementModalQR.style.visibility = 'visible';
  ElementCloseModalQR.addEventListener('click', stopCamera);
}

const stopCamera = async () => {
  try {
    await html5QrCode.stop();
  } catch(error) {
    console.error('error stopCamera', error);
  }
}

const hiddenControlsCamera = () => ElementContainerControlCamera.style.display = 'none';

const visibleControlsCamera = () => ElementContainerControlCamera.style.display = 'flex';

const handleGenerateSelectorCameras = () => {
  if (cameras.length > 1) {
    cameras.forEach(({
      id,
      label
    }) => {
      const option = document.createElement('option');
      option.value = id;
      option.text = label;
      ElementSelectorCamera.add(option);
    });
  }
}

const intervalGoBack = () => {
  intervalIdGoBack = setInterval(() => {
    if (secondsLeftGoBack <= 0) {
      goBack();
    }
    ElementButtonGoBack.textContent = `Regresar (${secondsLeftGoBack}s)`;
    secondsLeftGoBack--;
  }, 1000);
}

const handleContainerQrCode = () => {
  // ElementLoadingCamera.style.display = 'none';
  ElementLoadingCamera.style.display = 'flex';
  if (statusQrCode.loading) {
    ELEMENT_QR_CODE_WRAPPER.style.display = 'flex';
    ELEMENT_NOT_QR_CODE_WRAPPER.style.display = 'none';
  } else if (!statusQrCode.isEnabled) {
    ELEMENT_QR_CODE_WRAPPER.style.display = 'none';
    ELEMENT_NOT_QR_CODE_WRAPPER.style.display = 'flex';
    
  } else {
    ElementLoadingCamera.style.display = 'none';
    ELEMENT_QR_CODE_WRAPPER.style.display = 'flex';
    ELEMENT_NOT_QR_CODE_WRAPPER.style.display = 'none';
  }
}

const getCameras = async () => {
  try {
    cameras = await Html5Qrcode.getCameras();
    if (cameras && cameras.length) {
      cameraActiveId = cameras[0].id;
      if (cameras.length > 1) {
        visibleControlsCamera();
        handleGenerateSelectorCameras();
      }
      await onInitScannerQrCode();
    }
    statusQrCode = {
      loading: false,
      isEnabled: cameras.length
    }
  } catch (error) {
    console.error('error getCameras', error);
    statusQrCode = {
      loading: false,
      isEnabled: false
    }
    intervalGoBack();
  }
  handleContainerQrCode();
}

const onInitScannerQrCode = async () => {
  const status = html5QrCode.getState();
  statusQrCode.loading = true;
  handleContainerQrCode();
  if (status !== Html5QrcodeScannerState.NOT_STARTED) { 
    await stopCamera();
  }
  await html5QrCode.start({ deviceId: { exact: cameraActiveId} }, config, qrCodeSuccessCallback);
  statusQrCode.loading = false;
  handleContainerQrCode();
};

const changeSelected = async (event) => {
  cameraActiveId = event.target.value;
  await onInitScannerQrCode();
};

onInit = async () => {
  secondsLeftGoBack = 20;
  showModalQr();
  await getCameras();
  ElementSelectorCamera.addEventListener('change', changeSelected);
}

const goBack = () => {
  clearInterval(intervalIdGoBack);
  window.location = 'http://crmg.net/login';
}

onInit();