$(document).ready(function(){
  var datos = document.getElementById('home-in');

  $(datos).animate({
    opacity: 1,
	}, 2000);
  
  // Para que el boton suba al inicio de la pagina
  $('.fa-angle-up').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 900);
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('.fa-angle-up').slideDown(300);
    }else{
      $('.fa-angle-up').slideUp(300);
    }
  })

});