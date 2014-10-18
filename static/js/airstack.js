$(function(){
  $('header .brand').addClass('reveal');
  var idx = 1;
  var $controls = $('.header-17-sub .pt-controls');
  var length = $controls.find('li').length;
  var interval = setInterval(function(){
    idx++;
    $controls.find('li:nth-child('+idx+')').click();
    if (idx === length) idx = 0;
  }, 5000);
  $controls.find('li').on('click', function(evt){
    if (evt.originalEvent instanceof MouseEvent)
      clearInterval(interval);
  });
});
