'use strict';




/* $(function() {
  // Ici le DOM est prêt
}); */

/* $(window).load(function(event) {
    event.preventDefault();
    $(".loader").fadeOut();
    $('.container').fadeIn();
}) */

/* 
document.addEventListener('DOMContentLoaded', function(event) {
    // @link  https://developer.mozilla.org/fr/docs/Web/Events/DOMContentLoaded
   
    document.getElementsByClassName('loader')[0].style.display = 'none';
  }); */





var menuHidde = document.getElementById('menu_hidde');
var menuClick = document.querySelector('.menu_click');
var position = "name";
var titleName = $('.title_name');
var titleAboutMe = $('.title_about_me');
var titleFormation = $('.title_formation');




$(titleAboutMe).hide();
$(titleFormation).hide();


/********************NAV-MENU*****************************
 * ******************************************************/



menuClick.addEventListener('click', onClickToggleMenu);


function onClickToggleMenu(event) {
    event.preventDefault();
    
    menuHidde.classList.toggle('slide_menu');

    menuHidde.classList.toggle('slide_menu_return');
    setTimeout(function(){
        menuHidde.classList.toggle('hidden'); 
    }, 500);

}





/*********************TITLE SCROLL**************************
 * ********************************************************/


$(window).scroll(function(){
  
      console.log($(window).scrollTop() );
      if($(window).scrollTop() < 250 && position != "name") {
        
       $(titleName).show('fast','linear');
       $(titleAboutMe).hide();
        /* $('.title_main').html('<span class="name">Fabien</span><span class="name">Estrabaud</span>');
        //$('.title_main').toggleClass('anime_title');*/
       position = "name";
    
    }
        if($(window).scrollTop() > 250 && $(window).scrollTop() < 1000 && position != "a propos") {
        console.log('a propos');

            $(titleName).hide('fast','linear');
            $(titleAboutMe).show( 'fast','linear');
            $(titleFormation).hide();

           /* $('.title_main').html('<span class="name">Formation</span>');
            $('.title_main').toggleClass('anime_title');*/
            position = "a propos";
        } 

        if($(window).scrollTop() > 1000  && position != "formation") {

            $(titleName).hide();
            $(titleAboutMe).hide('slow','linear');
        
            setTimeout(function() {
                $('.title_main').css('display', 'none');
                $(titleFormation).show('swing');
            }, 300);
            

           position = "formation";
        }

        

    
  });



  