$(function(){
	// ПРОКРУТКА ПО ЯКОРЯМ
	$('.menu').on('click', 'a', function(e) {
		e.preventDefault();
		let id  = $(this).attr('href'),
			 top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	})

	// ТАБЫ
	$('.tabs__item').on('click', function(e){
		e.preventDefault();
		$('.tabs__item').removeClass('tabs__item--active');
		$(this).addClass('tabs__item--active');

		$('.tabs-content__item').removeClass('tabs-content__item--active');
		$($(this).attr('href')).addClass('tabs-content__item--active');
	});

	// СЛАЙДЕР
	const swiper = new Swiper('.news-slider', {
		// Optional parameters
		loop: true,
	 
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true
		},
	 
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	 
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true
		},

		autoplay: {
			delay: 2000
		}
	});

	const swiperTwo = new Swiper('.header-slider', {
		// Optional parameters
		loop: true,
		
		navigation: {
			nextEl: '.header-slider__next',
			prevEl: '.header-slider__prev',
		 }
	 
	});

	const swiperThree = new Swiper('.slider-photo', {
		loop: true,

		navigation: {
			nextEl: '.slider-photo__next',
			prevEl: '.slider-photo__prev'
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true
		}
	});

	//  МЕНЮ БУРГЕР
	$('.menu-burger').on('click', function(){
		$(this).toggleClass('menu-burger--active');
		$('.menu').toggleClass('menu--active');
	});

	$('.menu__item').on('click', function() {
		$('.menu').removeClass('menu--active');
		$('.menu-burger').removeClass('menu-burger--active');
	})


	// ТЭГИ
	$('.tags__item').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('tags__item--active');
	});

	// BOOKMARK
	$('.news__bookmark').on('click', function(){
		$(this).toggleClass('news__bookmark--active');
	});

	// МОДАЛЬНОЕ ОКНО
	$('[data-modal]').on('click', function(e) {
		e.preventDefault();

		let modal = $(this).data('modal');

		$('body').addClass('scroll-hidden');
		$(modal).addClass('open');

		setTimeout(function() {
			$(modal).find('.modal__wrapper').css({
				opacity: '1',
				transform: 'scale(1) translate(-50%, -50%)'
			})
		});
	})

	$('[data-close]').on('click', function(e) {
		e.preventDefault();

		let modal = $(this).parents('.modal');

		modal.find('.modal__wrapper').css({
			opacity: '0'
		})

		setTimeout(function() {
			$('body').removeClass('scroll-hidden');
			modal.removeClass('open');
		}, 200);
	})

	$('.overlay').on('click', function() {
		$('.modal__wrapper').css({
			opacity: '0',
			transform: 'scale(.5) translate(-50%, -50%)'
		})
		setTimeout(function() {
			$('body').removeClass('scroll-hidden');
			$('.modal').removeClass('open');
		}, 200);
	})

	$('.load-more').on('click', function() {
		$('.comment').removeClass('comment--hidden');
		$(this).css({
			display: 'none'
		})
	})
});