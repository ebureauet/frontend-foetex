$('document').ready(function(){
  //$('.columnbox--quatre').equalHeights();
});

$(window).load(function() {
  equalheight('.columnbox--quatre > *');
});


$(window).resize(function(){
  equalheight('.columnbox--quatre > *');
});
