$('document').ready(function(){
  //$('.columnbox--quatre').equalHeights();
});

$(window).load(function() {
  equalheight('.cols--trio > *, .cols--quartet > *');
});


$(window).resize(function(){
  equalheight('.cols--trio > *, .cols--quartet > *');
});
