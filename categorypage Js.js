// JavaScript Document 
// JavaScript Document
/* global document, mixitup*/
var mixitup, document;
var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
var mixer = mixitup(containerEl, {
    selectors: {
        target: '[data-ref~="mixitup-target"]'
    }
});
mixer.filter('.category-a');
