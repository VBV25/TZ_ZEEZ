/*--------------------SWIPER----------------------------------*/

new Swiper('.wrapper-gallery-text', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});

new Swiper('.gallery__row', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    loopedSlides: 3,
    breakpoints: {
        0: { slidesPerView: 1 },
        376: { slidesPerView: 1.2 },
        540: { slidesPerView: 1.7 },
        768: { slidesPerView: 2 },

    },
});

/*--------------------------------------------------------------*/