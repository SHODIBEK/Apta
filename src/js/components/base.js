import AOS from 'aos';

AOS.init({
	once: true,
	delay: 200,
	duration: 1000,
});

function headerHeight() {
	const header = $('header');
	const headerHeight = header.outerHeight();
	const headerTop = $('.header__top');
	const headerTopHeight = headerTop.outerHeight();
	$('html').attr('style', `--headerHeight: ${headerHeight}px; --headerTop: -${headerTopHeight}px;`);

	let lastScrollTop = 0;
	$(window).scroll(function (event) {
		let st = $(this).scrollTop();
		if (st > lastScrollTop) {
			$('header').addClass('header--scroll');
		} else {
			$('header').removeClass('header--scroll');
		}
		lastScrollTop = st;
	});
}

function mobileLange() {
	const languages = $('.lang-switcher__item');

	if ($(window).width() < 992) {
		console.log(true)
		languages.on('click', (e) => {
			let $this = $(e.currentTarget);

			$this.toggleClass('lang-switcher--open');
		});

		$(document).mouseup((e) => {
			if (languages.has(e.target).length === 0) {
				languages.removeClass('lang-switcher--open');
			}
		});
	}
}

$(document).on('ready', () => {
	headerHeight();
	mobileLange();
});
$(window).on('resize', () => {
	headerHeight();
	mobileLange();
});
