import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import PureCounter from '@srexi/purecounterjs';
import 'lazysizes';

svg4everybody();

window.$ = $;
window.jQuery = $;


require('ninelines-ua-parser');
require('./vendor/jquery.maskedinput');
require('@chenfengyuan/datepicker');
require('@fancyapps/fancybox');
