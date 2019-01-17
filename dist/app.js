/**********************************************/
/**********************************************/
/****** PROGETTO: sass-teambit - main.js ******/
/**********************************************/
/**********************************************/

console.log('welcome to sass-teambit');

/*****************************/
/**********PROGRAMMA**********/
/*****************************/

$(document).ready(function () {

  //Gestione della navBar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $('header').addClass('positionFixed');
    } else {
      $('header').removeClass('positionFixed');
    }
  });
});
