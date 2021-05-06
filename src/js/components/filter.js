import mixitup from 'mixitup';

let container = $('.cd-gallery__lists');

if (container.length > 0) {
	let mixer = mixitup(container);
}

let filter_tab_placeholder = $('.cd-tab-filter .placeholder a');
let filter_tab_placeholder_default_value = filter_tab_placeholder.data('mobile');
let filter_tab_placeholder_text = filter_tab_placeholder.text();

$('.cd-tab-filter li').on('click', (event) => {
	let selected_filter = $(event.target).data('type');
	if ($(event.target).is(filter_tab_placeholder)) {
		filter_tab_placeholder_default_value == filter_tab_placeholder.text() ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value);
		$('.cd-tab-filter').toggleClass('is-open');
	} else if (filter_tab_placeholder.data('type') == selected_filter) {
		filter_tab_placeholder.text($(event.target).text());
		$('.cd-tab-filter').removeClass('is-open');
	} else {
		$('.cd-tab-filter').removeClass('is-open');
		filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
		filter_tab_placeholder_text = $(event.target).text();
		$('.cd-tab-filter .selected').removeClass('selected');
		$(event.target).addClass('selected');
	}
});


const filterBtn = $('.js-filter--trigger');
const filterList = $('.filter__items');

filterBtn.on('click', () => {
	filterList.slideToggle();
});