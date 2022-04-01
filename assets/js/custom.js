/**
 * Custom js v1.0.0
 */
( function( $ ) {

    "use strict";

    $( document ).ready( function () {

        /* Start back top */
        $('#back-top').on( 'click', function (e) {
            e.preventDefault();
            $('html').scrollTop(0);
        } );
        /* End back top */

        /* btn mobile Start*/
        let subMenuToggle  =   $('.sub-menu-toggle');

        if ( subMenuToggle.length ) {

            subMenuToggle.each(function () {
                $(this).on( 'click', function () {

                    $(this).toggleClass('active');
                    $(this).closest( '.menu-item-has-children' ).siblings().find( subMenuToggle ).removeClass( 'active' );
                    $(this).parent().children( '.sub-menu' ).slideToggle();
                    $(this).parents( '.menu-item-has-children' ).siblings().find( '.sub-menu' ).slideUp();

                } )
            })

        }
        /* btn mobile End */

        // action button mobile search
        const btnSearchMobile = $('.btn-search-mobile');
        if ( btnSearchMobile.length ) {
            btnSearchMobile.on('click', function (event) {
                event.preventDefault();

                $(this).closest('.right-box').find('.search-box ').fadeToggle();
            })
        }

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

        // project tabs mobile
        $('.item-tab-dropdown-project').on('click', '.nav-link', function () {
            const cloneTab = $(this).children().clone();

            $(this).closest('.element-project-tabs-mobile').find('.dropdown-project-mobile').empty().append( cloneTab );
        })

        // service slider
        const elementServicePost = $('.element-service__post');
        if ( elementServicePost.length ) {

            elementServicePost.each(function () {
                const $this = $(this);
                const number_item = 5;

                $this.owlCarousel({
                    items: number_item,
                    loop: true,
                    margin: 18,
                    nav: false,
                    dots: true,
                    navSpeed: 800,
                    dotsSpeed: 800,
                    dragEndSpeed: 800,
                    onInitialized: function () {
                        const owlItemActive = $this.find('.owl-item.active');
                        const first = owlItemActive[0];
                        let last = owlItemActive[owlItemActive.length - 2];

                        if ( owlItemActive.length === number_item ) {
                            last = owlItemActive[owlItemActive.length - 1];
                        }

                        if ( first !== undefined ) {
                            first.classList.add('overlay');
                        }

                        if ( last !== undefined ) {
                            last.classList.add('overlay');
                        }

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

                        if ( owlItemActive.length === number_item ) {
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
                    nav: false,
                    dots: false,
                    margin: 12,
                    navSpeed: 800,
                    dotsSpeed: 800,
                    dragEndSpeed: 800,
                    autoplaySpeed: 800,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    responsive:{
                        0:{
                            items: 2
                        },
                        480:{
                            items: 3
                        },
                        768:{
                            items: 4
                        },
                        992:{
                            items: 5
                        },
                        1024:{
                            items: 6,
                            margin: 40
                        }
                    }
                })
            })

        }

        // show content post
        const postContentText = $('.post-content__text');
        if ( postContentText.length ) {
            const heightPostContent = postContentText[0].scrollHeight;

            $('.add-view-post').on('click', function (event) {
                event.preventDefault();

                postContentText.animate({'height': heightPostContent});
                $(this).closest('.post-content').find('.action-box').remove();
            })
        }

        // Project Feature Gallery
        const projectFeatureGallery = $('.project-feature-gallery');
        if ( projectFeatureGallery.length ) {
            projectFeatureGallery.each(function () {
                $(this).lightSlider({
                    gallery: true,
                    item: 1,
                    loop: true,
                    thumbItem: 8,
                    slideMargin: 8,
                    enableDrag: false,
                    currentPagerPosition: 'left',
                    prevHtml: '<i class="fa-solid fa-chevron-left"></i>',
                    nextHtml: '<i class="fa-solid fa-chevron-right"></i>'
                });
            })
        }

        // Slider News
        const sliderNews = $('.slider-news');
        if ( sliderNews.length ) {
            sliderNews.each(function () {
                $(this).owlCarousel({
                    loop: true,
                    margin: 20,
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
                        768:{
                            items: 3
                        }
                    }
                })
            })
        }

        // Contact Gallery
        const contactGallerySlider = $('.contact-gallery-slider');
        if ( contactGallerySlider.length ) {
            contactGallerySlider.each(function () {
                $(this).lightSlider({
                    gallery: true,
                    item: 1,
                    loop: true,
                    thumbItem: 9,
                    slideMargin: 27,
                    enableDrag: false,
                    currentPagerPosition: 'left',
                    prevHtml: '<i class="fa-solid fa-chevron-left"></i>',
                    nextHtml: '<i class="fa-solid fa-chevron-right"></i>'
                });
            })
        }

        // project slider
        const elementProjectSlider = $('.element-project-slider');
        if ( elementProjectSlider.length ) {

            elementProjectSlider.each(function () {
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

        // project slider mobile
        const projectSliderMobile = $('.project-slider-mobile');
        if ( projectSliderMobile.length ) {
            projectSliderMobile.each(function () {
                $(this).owlCarousel({
                    items: 1,
                    loop: true,
                    margin: 8,
                    nav: false,
                    dots: true,
                    navSpeed: 800,
                    dotsSpeed: 800,
                    dragEndSpeed: 800
                })
            })
        }

    });

    // Offcanvas menu mobile
    const myOffcanvas = document.getElementById('menu-mobile');
    const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);

    $(window).on('resize', function () {
        const widthScreen = $(window).width();

        if ( widthScreen >= 992 ) {
            bsOffcanvas.hide();
        }

    })

} )(jQuery);