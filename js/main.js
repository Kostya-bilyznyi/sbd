
	"use strict";
 

	const header = document.querySelector(".ba-header");
	const sectionOne = document.querySelector(".ba-intro");
	
	const sectionOneOptions = {
	  rootMargin: "-100px 0px 0px 0px"
	};
	
	const sectionOneObserver = new IntersectionObserver(function(
	  entries,
	  sectionOneObserver
	) {
	  entries.forEach(entry => {
		 if (!entry.isIntersecting) {
			header.classList.add("dark-backgrould");
		 } else {
			header.classList.remove("dark-backgrould");
		 }
	  });
	},
	sectionOneOptions);
	
	sectionOneObserver.observe(sectionOne);


	let menuBtn = document.querySelector('.ba-menu-toggle');
   let menu = document.querySelector('.ba-nav');
	menuBtn.addEventListener('click', () => menu.classList.toggle('open'));
	


	
const bestSlider = $('.ba-slide')
bestSlider.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '[data-hot-prev]',
	nextArrow: '[data-hot-next]',
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			 slidesToShow: 2,
			 slidesToScroll: 2,
			 arrows: false,
		  }
		},
		{
		  breakpoint: 640,
		  settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1
		  }
		}
	 ]
 });



	const links = $('.ba-awesome-tabs__links');

	links.on('click', function () {

		$('.ba-awesome-tabs__links.active').removeClass('active');
		$(this).addClass('active');
		$(this).closest('div.ba-awesome-tabs').find('div.ba-awesome-tabs__content').removeClass('active').eq($(this).index()).addClass('active');

	})