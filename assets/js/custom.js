/**
 * Custom js v1.0.0
 */
( function( $ ) {

    "use strict";

    $( document ).ready( function () {

        // service slider
        const elementServicePost = $('.element-service__post');

        if ( elementServicePost.length ) {

            elementServicePost.each(function () {
                const $this = $(this);

                $this.owlCarousel({
                    loop: true,
                    margin: 18,
                    nav: false,
                    dots: true,
                    responsive:{
                        0:{
                            items: 1
                        },
                        600:{
                            items: 3
                        },
                        1000:{
                            items: 5
                        }
                    },
                    onInitialized: function () {
                        const owlItemActive = $this.find('.owl-item.active');
                        const first = owlItemActive[0];
                        const last = owlItemActive[owlItemActive.length - 2];

                        first.classList.add('overlay');
                        last.classList.add('overlay');
                    },
                    onDrag: function () {
                        const owlItem = $this.find('.owl-item');
                        owlItem.removeClass('overlay');
                    },
                    onTranslate: function () {
                        const owlItemActive = $this.find('.owl-item.active');
                        owlItemActive.removeClass('overlay');
                    },
                    onTranslated: function () {
                        const owlItemActive = $this.find('.owl-item.active');
                        const first = owlItemActive[0];
                        let last = owlItemActive[owlItemActive.length - 2];

                        if ( owlItemActive.length === 5 ) {
                            last = owlItemActive[owlItemActive.length - 1];
                        }

                        first.classList.add('overlay');
                        last.classList.add('overlay');
                    }
                })
            })

        }

    });

} )(jQuery);