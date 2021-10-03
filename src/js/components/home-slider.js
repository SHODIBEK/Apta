import Swiper from 'swiper/bundle';

let sliderDataDelay = $('.last-section__items.swiper-container').data('slider-delay');

if (!sliderDataDelay && sliderDataDelay === undefined) {
	sliderDataDelay = 4000;
}

function sliderInit(classes, margin, sliderDelay, breakpointsm, breakpointmd, breakpointlg) {
	const swiper = new Swiper(classes, {
		loop: true,
		spaceBetween: margin,
		autoplay: {
			delay: sliderDelay,
			waitForTransition: true,
			disableOnInteraction: false,
		},
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

function eventSlider() {
	let eventThumbs = new Swiper('.index-event__items', {
		slidesPerView: 1,
		freeMode: true,
		simulateTouch: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
	});

	const events = new Swiper('.index-event__slider', {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 4000,
			waitForTransition: true,
			disableOnInteraction: false,
		},
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
		thumbs: {
			swiper: eventThumbs,
		},
	});
}
eventSlider();
sliderInit('.slider__js.swiper-container', 0, 4000, 1, 1, 1);
sliderInit('.project__slider.swiper-container', 30, 4000, 1, 2, 3);
sliderInit('.news__slider.swiper-container', 30, 4000, 1, 2, 3);
sliderInit('.last-section__items.swiper-container', 30, sliderDataDelay, 1, 3, 5);
