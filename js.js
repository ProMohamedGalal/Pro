/* global document, console */
/* Set the width of the side navigation to 250px */
var document;
function openNav() {
    "use strict";
    document.getElementById("mySidenav").style.width = "250px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
    "use strict";
    document.getElementById("mySidenav").style.width = "0";
}
/* start slider*/
var $;
$('.carousel').carousel({
    interval: 2000,
    wrap: true
});
/*
function ss(){
	$('#slider-area').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600
});
}
	
 end slider*/
var mixitup;
var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
var mixer = mixitup(containerEl, {
    selectors: {
        target: '[data-ref~="mixitup-target"]'
    },
    animation: {
        animateResizeTargets: true
    }
});
mixer.filter('all');
