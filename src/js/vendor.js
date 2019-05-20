import $ from 'jquery';
import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import Foundation from 'foundation-sites';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');

Foundation.addToJquery($);

$(document).foundation();