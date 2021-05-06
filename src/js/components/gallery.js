import Swiper from 'swiper/bundle';

$('[data-fancybox="gallery"]').fancybox({
	
	btnTpl: {
		arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
			'<div><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.287 34.655L30.622 32.385L22.982 24.829L30.517 17.135L28.253 14.924L18.371 24.775L28.287 34.655Z" fill="#014EB4"/></svg></div>' +
			'</button>',

		arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
			'<div><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.713 15.345L19.378 17.615L27.018 25.171L19.483 32.865L21.747 35.076L31.629 25.225L21.713 15.345Z" fill="#014EB4"/></g><defs><clipPath id="clip0"><rect width="50" height="50" fill="white" transform="translate(50 50) rotate(-180)"/></clipPath></defs></svg></div>' +
			'</button>',
	},
});

let galleryThumbs = new Swiper('.gallery-thumbs', {
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	breakpoints: {
		// when window width is >= 480px
		320: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});

let galleryTop = new Swiper('.gallery-slider', {
	loop: true,
	preloadImages: false,
	lazy: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs,
	},
});
