$(function () {

	$('.main-slider').owlCarousel({
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		items: 1,
		margin: 0,
		stagePadding: 0,
		smartSpeed: 1000,
		nav: true,
		navText: ['<img src="img/icons/arrow-left.png" alt="prev">', '<img src="img/icons/arrow-right.png" alt="next">'],
		navContainer: '.main-slider__arrows',
		dotsContainer: '.main-slider__dots',
	});

	$('.portfolio-slider').owlCarousel({
		loop: true,
		dots: false,
		nav: false,
		margin: 0,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 3,
			},
			1024: {
				items: 4,
			},
			1200: {
				items: 5,
			}
		}
	})

	$(window).scroll(startCounter);

	function startCounter() {
		var hT = $('.about-features').offset().top,
			hH = $('.about-features').outerHeight(),
			wH = $(window).height();
		if ($(window).scrollTop() > hT + hH - wH) {
			$(window).off("scroll", startCounter);
			$('.about-features__title span').each(function () {
				var $this = $(this);
				$({
					Counter: 0
				}).animate({
					Counter: $this.text()
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
		}
	}

	$(".phone").mask("+99(999) 999-99-99");

	var burger = $('#burgerBtn');
	var mobileContent = $('.header-menu');

	burger.on('change', function () {
		mobileContent.toggleClass('show');
	});

	$(document).on('click', function (e) {
		var target = e.target;
		if (!target.closest('.burger') && !$(target).closest(".header-menu").length) {
			burger.prop('checked', false);
			mobileContent.removeClass('show');
		}
	});

});