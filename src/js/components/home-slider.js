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

function eventSlider() {
	let eventThumbs = new Swiper('.index-event__items', {
		slidesPerView: 1,
		freeMode: true,
		simulateTouch: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
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
sliderInit('.slider__js.swiper-container', 0, 1, 1, 1);
sliderInit('.project__slider.swiper-container', 30, 1, 2, 3);
sliderInit('.news__slider.swiper-container', 30, 1, 2, 3);