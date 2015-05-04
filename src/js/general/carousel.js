require('owlcarousel');
//require('../../../bower_components/slick.js/slick/slick.min.js');
//write the carousel config here

$('.carouselbar--duo__carousel').owlCarousel({
  autoPlay : 3000, //Set AutoPlay to 3 seconds
  margin : 20,
  loop : true,
  nav : true,
  items : 2,
  navContainer : '.carouselbar--duo__nav',
  dotsContainer : '.carouselbar--duo__dots',
  navText : ['<span></span>','<span></span>'],
  responsive : {
    0 : {
      items : 1,
      nav : true,
      dots : false
    },
    768 : {
      items : 2,
      nav : true,
      dots : true
    }
  }
});
