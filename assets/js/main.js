//preloader
$(window).on('load', function () {
	$('#preloader').delay(500).slideUp(1000);
});

$('.slider').slick({
	speed: 800,
	arrows: false,
	dots: false,
	autoplay: true,
	cssEase: 'linear',
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			},
		},
	],
});
