$(function(){
  
  $('input').on('focus',function(){
    $(this).css({
      borderRadius: '0px',
    });
  })

    $('.footer a').click(function(e){
      e.preventDefault();
    });

});