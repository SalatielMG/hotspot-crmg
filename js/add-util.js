import { ENVIRONMENT } from './conf/environment.js';
const ElementModalAdd = document.getElementById('modalAdd');
const ElementOmitButtonAdd = document.querySelector('.btn-omit-add');

let intervalAdd;
let seconds = 0;
let secondsToShowOmitButton;

export const handleShowModal = () => {
    if (!ENVIRONMENT.adds) {
        return;
    }
    const {
        type,
        enabled,
        timeout: {
            showModal,
            showOmitButton,
            closeModal: {
                isAutomatic: isAutomaticCloseModal,
                timeout: timeoutCloseModal
            }
        },
        imagesAdd
    } = ENVIRONMENT.adds;
    if (!enabled) {
        return;
    }
    secondsToShowOmitButton = showOmitButton;
    intervalAdd = setInterval(() => {
        switch (seconds) {
            case showModal:
                iniShowModalAdd(imagesAdd);
                break;
            case showOmitButton:
                showOmitButtonAddText();
                break;
            case timeoutCloseModal: 
                stopAdd(isAutomaticCloseModal);
                break;
        }
        if (isNotShowOmitButton()) {
            initCounterShowOmitAddText(showOmitButton - seconds);
        }
        seconds ++;
    }, 1000);
}

const isNotShowOmitButton = () => seconds < secondsToShowOmitButton;

export const stopAdd = (isAutomaticCloseModal) => {
    if (!isAutomaticCloseModal || isNotShowOmitButton()) {
        return;
    }
    seconds = 0;
    closeModalAdd();
    clearInterval(intervalAdd);
}

const iniShowModalAdd = (imagesAdd) => {
    ElementOmitButtonAdd.textContent = 'Omitir anuncio';
    showModalAdd();
    handleCarrouselImgAdd(imagesAdd);
}

// :=> =================================================

const handleCarrouselImgAdd = (imagesAdd) => {
    const ELEMENT_MODAL_WRAPPER_ADD = document.getElementById('modal-wrapper-add');
    if (!imagesAdd.length) {
        return;
    }
    if (imagesAdd.length === 1) {
        ELEMENT_MODAL_WRAPPER_ADD.innerHTML = innerHtmlSingleImageAdd(imagesAdd[0]);
        return;
    }
    ELEMENT_MODAL_WRAPPER_ADD.innerHTML = innerHtmlMultiImageAdd();
    const ELEMENT_CAROUSEL_ADD_CONTAINER = document.getElementById('carousel-add-crmg-container');
    ELEMENT_CAROUSEL_ADD_CONTAINER.innerHTML = handleInnerHtmlItemsCarrouselAdd(imagesAdd);
    initCarrouselAdd();
}

const initCarrouselAdd = (settingCarrousel) => {
    const autoplayTimeout = settingCarrousel?.autoplayTimeout
    ? settingCarrousel.autoplayTimeout : 3500;
    $('#carousel-add-crmg-container').owlCarousel({
        items: 1.0001,
        loop: true,
        animateOut: "fadeOut",
        animateIn: "flipInX",
        autoplay: true,
        autoplayTimeout,
        autoplayHoverPause: true,
    });
}

const innerHtmlSingleImageAdd = (source) => 
`<img class="add-img-container"
    src="${source}"
>`;

const innerHtmlMultiImageAdd = () => 
`<div class="owl-carousel owl-theme"
    id="carousel-add-crmg-container">
</div>`;

const handleInnerHtmlItemsCarrouselAdd = (imagesAdd) => {
    let items = '';
    imagesAdd.forEach(img => {
        items = `${items}
        <div class="item">
            <img src="img/adds/${img}" class="add-img-container"/>
        </div>`
    });
    return items;
}

// :=> =================================================

const showModalAdd = () => {
    ElementModalAdd.style.display = 'block';
    ElementOmitButtonAdd.style.display = 'block';
    ElementOmitButtonAdd.style.background = '#3e4d59';
    ElementOmitButtonAdd.addEventListener('click', stopAdd);
}

const closeModalAdd = () => {
    ElementModalAdd.style.display = 'none';
}

const initCounterShowOmitAddText = (leftSecond) => {
    ElementOmitButtonAdd.textContent = `Omitir anuncio en ${leftSecond} s`;
};

const showOmitButtonAddText = () => {
    ElementOmitButtonAdd.textContent = 'Omitir anuncio';
    ElementOmitButtonAdd.style.background = '#ff0000';
}

export const openDetailAdd = () => {
    showOmitButtonAddText();
    ElementOmitButtonAdd.textContent = 'Cerrar anuncio';
    showModalAdd();
}