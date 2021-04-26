let submenu = $('.menu__item-submenu');
let mobileBtn = $('.js-mobile__btn');

submenu.on('click', (ev) => {
	let $this = $(ev.currentTarget);

	$this.find('.submenu').slideToggle();
	$this.toggleClass('submenu--active');
});

mobileBtn.on('click', () => {
	$('body').toggleClass('mobile-menu--open');
});

$(document).mouseup(function (e) {
    var container = $(".header__bottom");
    if (container.has(e.target).length === 0){
        $('body').removeClass('mobile-menu--open');
        submenu.removeClass('submenu--active');
    }
});