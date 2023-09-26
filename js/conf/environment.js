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
                timeout: 60
            }
        },
        /**
         * Nombre de las de imagenes de la publicidad
         * @Editable Isai
         */
        srcAdds: [
            'img/adds/crmg-1.jpg',
            'img/adds/crmg-2.jpg',
            'img/adds/alan-ad.jpg'
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
            autoplayTimeout: 3500,
            autoplayHoverPause: true
        },
        items: [
            {
                title: 'INTERNET RESIDENCIAL',
                whatsapp: '971 113 8916',
                srcImg: 'img/slides/1.jpg',
                srcAdds: [
                    'img/adds/crmg-1.jpg',
                    'img/adds/crmg-2.jpg'
                ]
            },
            {
                title: 'SERVICIO TECNICO A EQUIPOS DE COMPUTO',
                whatsapp: '971 174 5729',
                srcImg: 'img/adds/alan-ad.jpg',
                srcAdds: [
                    'img/adds/alan-ad.jpg'
                ]
            }
        ]
    }
}