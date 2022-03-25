/**
 * Custom js v1.0.0
 */
( function( $ ) {

    "use strict";

    $( document ).ready( function () {

        // project slider tab
        const projectSliderTab = $('.project-slider-tab');

        if ( projectSliderTab.length ) {
            projectSliderTab.each(function () {

                $(this).owlCarousel({
                    items: 1,
                    loop: true,
                    margin: 18,
                    nav: false,
                    dots: true,
                    navSpeed: 800,
                    dotsSpeed: 800,
                    dragEndSpeed: 800
                })

            })
        }

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
                    navSpeed: 800,
                    dotsSpeed: 800,
                    dragEndSpeed: 800,
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

        // partner
        const elementPartner = $('.element-partner');

        if ( elementPartner.length ) {

            elementPartner.each(function () {
                $(this).owlCarousel({
                    loop: true,
                    margin: 40,
                    nav: false,
                    dots: true,
                    navSpeed: 800,
                    dotsSpeed: 800,
                    dragEndSpeed: 800,
                    responsive:{
                        0:{
                            items: 1,
                            margin: 0,
                        },
                        480:{
                            items: 2,
                            margin: 12,
                        },
                        576:{
                            items: 3,
                            margin: 12,
                        },
                        768:{
                            items: 5,
                            margin: 12,
                        },
                        992:{
                            items: 6
                        }
                    }
                })
            })

        }

    });

} )(jQuery);