$('document').ready(function(){
  //$('.columnbox--quatre').equalHeights();
});

$(window).load(function() {
  equalheight('.cols--trio > *, .cols--quartet > *');
});


$(window).resize(function(){
  equalheight('.cols--trio > *, .cols--quartet > *');
});

//gallery
var i, imgn, imgsrc, addclass;
i = 0;
imgn = $('.gallery img').length;
$('.gallery').prepend('<div class="col-sm-5"></div><div class="col-sm-7"></div><div class="col-sm-12"></div>');
$('.gallery').find('img').each(function(){
  //alert($(this).index());
  i += 1;
  imgsrc = $(this).attr('src');
  if ((i <= 4) && (imgn >= 4)){
    if (i % 2 === 0){
      $(this).appendTo('.gallery .col-sm-7');
    }else{
      $(this).appendTo('.gallery .col-sm-5');
    }
  }else
  {
    $(this).appendTo('.gallery .col-sm-12');
  }

  $(this).wrap('<figure style="background-image:url('+imgsrc+')"></figure>');

});
