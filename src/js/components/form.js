$(($) => {
	$.mask.definitions['9'] = false;
	$.mask.definitions['5'] = '[0-9]';
	$('.js-phone').mask('+998 (55) 555-55-55');

	$.fn.datepicker.languages.ru = {
		format: 'dd.mm.YYYY',
		days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
		daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		weekStart: 1,
		startView: 0,
		yearFirst: false,
		yearSuffix: '',
	};
	$.fn.datepicker.languages.oz = {
		format: 'dd.mm.YYYY',
		days: ['Якшанба', 'Душанба', 'Сешанба', 'Чоршанба', 'Пайшанба', 'Жума', 'Шанба'],
		daysShort: ['Якш', 'Душ', 'Сеш', 'Чор', 'Пай', 'Жум', 'Шан'],
		daysMin: ['Як', 'Ду', 'Се', 'Чо', 'Па', 'Жу', 'Ша'],
		months: ['Январ', 'Феврал', 'Март', 'Апрел', 'Май', 'Июн', 'Июл', 'Август', 'Сентябр', 'Октябр', 'Ноябр', 'Декабр'],
		monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		weekStart: 1,
		startView: 0,
		yearFirst: false,
		yearSuffix: '',
	};
	$.fn.datepicker.languages.uz = {
		format: 'dd.mm.YYYY',
		days: ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'],
		daysShort: ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'],
		daysMin: ['Ya', 'Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha'],
		months: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
		monthsShort: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'],
		weekStart: 1,
		startView: 0,
		yearFirst: false,
		yearSuffix: '',
	};

	const lang = $('html').attr('lang');

	$('[data-toggle="datepicker"]').datepicker({
		language: lang,
		autoHide: true,
	});

	const inputFile = $('input[type="file"]');
	const inputText = $('.file-name').text();

	inputFile.on('change', (e) => {
		let $this = $(e.currentTarget);
		let thisVal = $this.val();
		let fileName = thisVal.split('/').pop().split('\\').pop();
		$('.file-name').text(fileName);
		if (thisVal) {
			$this.parent().addClass('file-true');
		}

		$('.file-clear').on('click', () => {
			$this.val(null);
			$('.file-name').text(inputText);
			$this.parent().removeClass('file-true');
		});
	});
});
