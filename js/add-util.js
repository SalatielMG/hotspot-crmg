import { ENVIRONMENT } from './conf/environment.js';
import { 
    TextOmitAdd,
    TextCounterBeforeOmitAdd,
    TextCloseAdd
} from './util.js';
const ElementModalAdd = document.getElementById('modalAdd');
const ElementOmitButtonAdd = document.querySelector('.btn-omit-add');

let intervalAdd;
let seconds = 0;
let secondsToShowOmitButton;

let currentIndexMainAdd = 0;

export const getCurrentIndexMainAdd = () => currentIndexMainAdd;

export const setCurrentIndexMainAdd = (value) => currentIndexMainAdd = value;

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
                timeout: timeoutCloseModal
            }
        },
        srcAdds
    } = ENVIRONMENT.adds;
    if (!enabled) {
        return;
    }
    secondsToShowOmitButton = showOmitButton;
    intervalAdd = setInterval(() => {
        switch (seconds) {
            case showModal:
                iniShowModalAdd(srcAdds);
                break;
            case showOmitButton:
                showOmitButtonAddText();
                break;
            case timeoutCloseModal: 
                stopAdd();
                break;
        }
        if (isNotShowOmitButton()) {
            initCounterShowOmitAddText(showOmitButton - seconds);
        }
        seconds ++;
    }, 1000);
}

const isNotShowOmitButton = () => seconds < secondsToShowOmitButton;

export const stopAdd = () => {
    const {
        enabled,
        timeout: {
            closeModal: {
                isAutomatic: isAutomaticCloseModal
            }
        }
    } = ENVIRONMENT.adds;
    if (!enabled) {
        closeModalAdd();
        return;
    }

    if (ElementOmitButtonAdd.textContent === TextCloseAdd) {
        closeModalAdd();
        return;
    }

    if (!isAutomaticCloseModal && isNotShowOmitButton()) {
        return;
    }
    seconds = 0;
    closeModalAdd();
    clearInterval(intervalAdd);
}

const iniShowModalAdd = (srcAdds) => {
    ElementOmitButtonAdd.textContent = 'Omitir anuncio';
    showModalAdd();
    handleCarrouselImgAdd(srcAdds);
}

// :=> =================================================

const handleCarrouselImgAdd = (srcAdds) => {
    const ELEMENT_MODAL_WRAPPER_ADD = document.getElementById('modal-wrapper-add');
    if (!srcAdds.length) {
        return;
    }
    if (srcAdds.length === 1) {
        ELEMENT_MODAL_WRAPPER_ADD.innerHTML = innerHtmlSingleImageAdd(srcAdds[0]);
        return;
    }
    ELEMENT_MODAL_WRAPPER_ADD.innerHTML = innerHtmlMultiImageAdd();
    const ELEMENT_CAROUSEL_ADD_CONTAINER = document.getElementById('carousel-add-crmg-container');
    ELEMENT_CAROUSEL_ADD_CONTAINER.innerHTML = handleInnerHtmlItemsCarrouselAdd(srcAdds);
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

const handleInnerHtmlItemsCarrouselAdd = (srcAdds) => {
    let items = '';
    srcAdds.forEach(img => {
        items = `${items}
        <div class="item">
            <img src="${img}" class="add-img-container"/>
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
    ElementOmitButtonAdd.textContent = TextCounterBeforeOmitAdd.replace('LEFT_SECONDS', leftSecond);
};

const showOmitButtonAddText = () => {
    ElementOmitButtonAdd.textContent = TextOmitAdd;
    ElementOmitButtonAdd.style.background = '#ff0000';
}

export const openDetailAdd = () => {
    const srcAdds = ENVIRONMENT.banner.items[currentIndexMainAdd].srcAdds;
    showOmitButtonAddText();
    showModalAdd();
    handleCarrouselImgAdd(srcAdds);
    ElementOmitButtonAdd.textContent = TextCloseAdd;
    ElementOmitButtonAdd.style.background = '#ff0000';
}