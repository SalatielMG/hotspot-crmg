// export const ENABLED_ADD = true;
export const ENVIRONMENT = {
    adds: {
        /**
         * Bandera de validacion para habilitar la funcionalidad de anuncios
         */
        enabled: true,
        /**
         * Type reference validation add
         * 
         * Enum: ['DEFAULT', 'FREE_TRIAL]
         */
        type: 'FREE_TRIAL',
        /**
         * Representa el texto del boton de Conectarse gratis
         * 
         * @Editable Isai
         */
        textBtnFreeTrial: 'Conéctese gratis',
        timeout: {
            /**
             * Tiempo en segundos para mostrar el modal de publicidad
             */
            showModal: 0,
            /**
             * Tiempo en segundos para mostrar el boton de omitir anuncio
             * DEFAULT: 20
             * 
             * @Editable Isai
             */
            showOmitButton: 20,
            /**
             * Validaciones para cerrar el modal de publicidad
             */
            closeModal: {
                isAutomatic: false,
                timeout: 60
            }
        },
        /**
         * Nombre de las de imagenes de la publicidad
         * @Editable Isai
         */
        imagesAdd: [
            'alan-ad.jpg',
            'alan-ad.jpg',
            'alan-ad.jpg',
            'alan-ad.jpg',
            'alan-ad.jpg',
            'alan-ad.jpg'
        ],
        settingCarrousel: {
            /**
             * Tiempo en milisegundos para cambiar entre imagen del carrusel
             * @Editable Isai
             */
            autoplayTimeout: 5000
        }
    }
}