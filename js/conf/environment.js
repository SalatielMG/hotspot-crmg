// export const ENABLED_ADD = true;
export const ENVIRONMENT = {
    adds: {
        /**
         * Bandera de validacion para habilitar la funcionalidad de anuncios
         */
        enabled: true,
        /**
         * Tipo de publicidad
         * 
         * Enum: ['DEFAULT', 'FREE_TRIAL]
         * DEFAULT: Publcidad con login normal
         * FREE_TRIAL: Publicidad con opcion de internet gratis
         */
        type: 'DEFAULT',
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
            showOmitButton: 10,
            /**
             * Validaciones para cerrar el modal de publicidad
             */
            closeModal: {
                isAutomatic: false,
                timeout: 20
            }
        },
        /**
         * Nombre de las de imagenes de la publicidad
         * @Editable Isai
         */
        srcAdds: [
            'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-1.jpg|min-height-70',
            // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-2.png',
            'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/backgrounds/movil/crmg-1.jpg',
            // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-3.png',
            'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/backgrounds/movil/crmg-6.jpg',
            // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-4.png',
            // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-5.png',
            // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-6.png',
        ],
        settingCarrousel: {
            /**
             * Tiempo en milisegundos para cambiar entre imagen del carrusel
             * @Editable Isai
             */
            autoplayTimeout: 5000
        }
    },
    banner: {
        carouselConfig: {
            items: 1.0001,
            loop: true,
            animateOut: "fadeOut",
            animateIn: "flipInX",
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        },
        items: [
            {
                title: 'INTERNET RESIDENCIAL',
                whatsapp: '971 107 8302',
                srcImg: 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/banners/1.jpg',
                srcAdds: [
                    'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-1.jpg|min-height-70',
                    // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-2.png',
                    'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/backgrounds/movil/crmg-1.jpg',
                    // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-3.png',
                    'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/backgrounds/movil/crmg-6.jpg',
                    // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-4.png',
                    // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-5.png',
                    // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-6.png',
                ]
            },
            {
                title: 'SERVICIO TECNICO A EQUIPOS DE COMPUTO',
                whatsapp: '971 107 8302',
                srcImg: 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-1.jpg',
                srcAdds: [
                    'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/adds/crmg/crmg-1.jpg|min-height-70',
                ]
            }
        ]
    },
    bodySrcImg: {
        timeoutChange: 15,
        desktop: [
            'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/backgrounds/desktop/desktop.jpg'
        ],
        movil: [
            // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/backgrounds/movil/crmg-1.jpg',
            // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/backgrounds/movil/crmg-2.jpg',
            // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/backgrounds/movil/crmg-3.jpg',
            // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/backgrounds/movil/crmg-4.jpg',
            // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/backgrounds/movil/crmg-5.jpg',
            // 'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/backgrounds/movil/crmg-6.jpg',
            'https://raw.githubusercontent.com/SalatielMG/crmg-resources/master/hotspot/img/backgrounds/movil/crmg-7.jpg',
        ],
        enabledAnimationFadeId: false,
        timeoutFadeIn: 1
    }
}