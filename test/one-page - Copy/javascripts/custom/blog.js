// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: Micah.
// Author: Unbranded.
// Version 1.0 - Initial Release
// Website: http://www.unbranded.co 
// Copyright: (C) 2015 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */


(function(){
  "use strict";

    //Detecting viewpot dimension
    var vH = $(window).height();
    var vW = $(window).width();

$('.mobile-nav .nav-btn-section .nav-btn-wrap').on('click',function(){
  $('.mobile-nav-links').toggleClass('mobile-link-open');
}); 

$(".one-section-owl-nav-no-pag").imagesLoaded( function() {
  
  $(".one-section-owl-nav-no-pag").owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      navText: [
      "<i class='main-owl-nav ion-chevron-left'></i>",
      "<i class='main-owl-nav ion-chevron-right'></i>"
      ],
      navRewind:true,
      autoplay:true,
      autoplayTimeout:6000,
      autoplaySpeed:1000,
      navSpeed:1000,
      dots:false,
      dotsSpeed:500,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

 });    


})();
//  JSHint wrapper $(function ($)  : ends


















    





