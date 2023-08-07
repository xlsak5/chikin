// banner의 swiper
{
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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
  });
}
// MENU의 swiper
{
  const swiper = new Swiper('.swiper2', {
    slidesPerView: 3,  
    slidesPerGroup: 1,
    spaceBetween: 20,
    centeredSlides: false, 
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      1900: {
        slidesPerView: 3,  
        slidesPerGroup: 1,
      },
      1280: {
        slidesPerView: 2,  
        slidesPerGroup: 1,
      },
      580: {
        slidesPerView: 2,  
        slidesPerGroup: 1,
      },
      0:{
        slidesPerView: 1,  
        slidesPerGroup: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
}

// 햄버거 메뉴 클릭시
// var burger = $('.menu-trigger');

// burger.each(function(index){
// 	var $this = $(this);
	
// 	$this.on('click', function(e){
// 		e.preventDefault();
// 		$(this).toggleClass('active-' + (index+1));
// 	})
// });
