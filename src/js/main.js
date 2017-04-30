//= oldscript.js
//= slider.js
$("#listing-slider-1").Slider({
	rightArrow:'result__radio__next',
	leftArrow: 'result__radio__prev',
	autoPlayDelay: 3
});
$("#listing-slider-2").Slider({
	rightArrow:'result__radio__next',
	leftArrow: 'result__radio__prev',
	autoPlay: false
});
$("#listing-slider-3").Slider({
	rightArrow:'result__radio__next',
	leftArrow: 'result__radio__prev',
	autoPlayDelay: 8
});
$(".transparent-block").Slider({
	slide: "transparent-slide",
	radios: "radio-element-down",
	arrows: false,
	autoPlayDelay: 3
})