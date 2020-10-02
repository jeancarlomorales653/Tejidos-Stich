//Cuando cargue la página completamente
$(document).ready(function(){
    //Creamos un evento click para el enlace
    $(".ancla").click(function(evento){
      //Anulamos la funcionalidad por defecto del evento
      evento.preventDefault();
      //Creamos el string del enlace ancla
      var codigo = "#" + $(this).data("ancla");
      //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
      $("html,body").animate({scrollTop: $(codigo).offset().top}, 3000);
    });
  });

//Cuando cargue la página completamente
$(document).ready(function(){
    //Creamos un evento click para el enlace
    $(".ancla2").click(function(evento){
      //Anulamos la funcionalidad por defecto del evento
      evento.preventDefault();
      //Creamos el string del enlace ancla
      var codigo = "#" + $(this).data("ancla2");
      //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
      $("html,body").animate({scrollTop: $(codigo).offset().top}, 3000);
    });
  });

  //Cuando cargue la página completamente
$(document).ready(function(){
    //Creamos un evento click para el enlace
    $(".ancla3").click(function(evento){
      //Anulamos la funcionalidad por defecto del evento
      evento.preventDefault();
      //Creamos el string del enlace ancla
      var codigo = "#" + $(this).data("ancla3");
      //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
      $("html,body").animate({scrollTop: $(codigo).offset().top}, 3000);
    });
  });