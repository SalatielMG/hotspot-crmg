import { ENABLED_ADD } from './conf/env.js';
const ElementModalAdd = document.getElementById('modalAdd');
const ElementOmitButtonAdd = document.querySelector('.btn-omit-add');

const SECONDS_SHOW_MODAL_ADD = 0;
const SECONDS_SHOW_OMIT_ADD = 3;
const SECONDS_LIMIT_ADD = 10;
let intervalAdd;
let seconds = 0;

export const handleShowModal = () => {
    if (!ENABLED_ADD) {
        return;
    }
    intervalAdd = setInterval(() => {
        switch (seconds) {
            case SECONDS_SHOW_MODAL_ADD:
                iniShowModalAdd();
                break;
            case SECONDS_SHOW_OMIT_ADD:
                showOmitButtonAdd();
                break;
            case SECONDS_LIMIT_ADD: 
                stopAdd();
                break;
        }
        seconds ++;
    }, 1000);
}

export const stopAdd = () => {
    seconds = 0;
    closeModalAdd();
    clearInterval(intervalAdd);
}

const iniShowModalAdd = () => {
    ElementOmitButtonAdd.textContent = 'Omitir anuncio';
    showModalAdd();
}

const showModalAdd = () => {
    ElementModalAdd.style.display = 'block';
    ElementOmitButtonAdd.addEventListener('click', stopAdd);
}

const closeModalAdd = () => {
    ElementModalAdd.style.display = 'none';
}

const showOmitButtonAdd = () => {
    ElementOmitButtonAdd.style.visibility = 'visible';
}

export const openDetailAdd = () => {
    showOmitButtonAdd();
    ElementOmitButtonAdd.textContent = 'Cerrar anuncio';
    showModalAdd();
}