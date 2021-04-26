import Swiper from 'swiper/bundle';

function sliderInit(classes, margin, breakpointsm, breakpointmd, breakpointlg) {
	const swiper = new Swiper(classes, {
		loop: true,
		spaceBetween: margin,
		// autoplay: {
		// 	delay: 4000,
		// 	waitForTransition: true,
		// 	disableOnInteraction: false,
		// },
		preloadImages: false,
		lazy: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 480px
			320: {
				slidesPerView: breakpointsm,
			},
			768: {
				slidesPerView: breakpointmd,
			},
			992: {
				slidesPerView: breakpointlg,
			},
		},
	});
}

sliderInit('.slider__js.swiper-container', 0, 1, 1, 1);
sliderInit('.project__slider.swiper-container', 30, 1, 2, 3);
sliderInit('.news__slider.swiper-container', 30, 1, 2, 3);
sliderInit('.swiper-container.index-event__slider', 0, 1, 1, 1);