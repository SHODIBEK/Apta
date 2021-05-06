const accTab = $('.accordion__tab');

accTab.on('click', (e) => {
	let $this = $(e.currentTarget);

	if ($this.parent().hasClass('accordion__item--open')) {
        $this.parent().removeClass('accordion__item--open');
        $this.next().slideUp(350);
    } else {
        $this.parent().siblings().removeClass('accordion__item--open');
        $this.parent().parent().find('.accordion__content').slideUp(350);
        $this.parent().toggleClass('accordion__item--open');
        $this.next().slideToggle(350);
    }
});
