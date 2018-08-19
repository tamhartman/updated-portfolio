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


// Intro 06 is given because the home text style is of index-06 in multi page

$('.home-parallax .intro-06-content-wrap').height(vH);


// Mobile nav scripts

$('.mobile-nav .nav-btn-section .nav-btn-wrap').on('click',function(){
  $('.mobile-nav-links').toggleClass('mobile-link-open');
}); 



// Horizontal nav fixer
$('.nav-sticker').waypoint(function (direction) {

    if (direction === 'down') {
      $('.horizontal-nav').addClass('nav-fixed-positioner');
    }
    else {
      $('.horizontal-nav').removeClass('nav-fixed-positioner');
    } 

  },{ offset: 80 });



// Navigation activator & Navigation Highlighter for Main Nav

// setTimeout(function() {
var page_stack = $.makeArray();
var stack_top = 0;

$('.page-section-entry').waypoint(function (direction) {
  if (direction === 'down')
  {
    // alert($(this).attr('id'));
    $('.horizontal-nav ul li > a').removeClass('active');
    $('.horizontal-nav ul li > a[href=#'+ $(this).attr('id') +']').addClass('active');
    stack_top = stack_top+1; 
    page_stack[stack_top] = $(this).attr('id');    
  }
  else
  {
    stack_top = stack_top-1;
    $('.horizontal-nav ul li > a').removeClass('active');
    $('.horizontal-nav ul li > a[href=#'+page_stack[stack_top]+']').addClass('active');
  }
  },{ offset: 80 });
// },500);


//Nav color change on click

$('.horizontal-nav .nav-section ul li a').on('click',function() {
  if($(this).hasClass('active')) {

  }
  else {
    $('.horizontal-nav .nav-section ul li a').removeClass('active');
    $(this).addClass('active');
  }
});


// Nav scroll to page


if( !device.tablet() && !device.mobile() ) {


        $(".scroll-link").click(function() {
            var ScrollOffset = 80;
            //alert(ScrollOffset);
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
            }, {
                duration: 1500,
                easing: "linear"
            });
            return false;
        });


                
} else {
    


        $(".scroll-link").click(function() {
            var ScrollOffset = 80;
            //alert(ScrollOffset);
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
            }, {
                duration: 1500,
                easing: "linear"
            });
            return false;
        });


   
}







// about section scripts
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");

    sync1.owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn',
        center : false,
        loop : true,
        items : 1,
        margin:0,
        nav : false,
        dots: false,
        touchDrag:false,
        mouseDrag:false
    });

    sync2.on(' initialize.owl.carousel', function(event) {
        var sync_order = 0;
        sync2.find('.item').each(function() {
            $(this).attr('data-item-no',sync_order);
            sync_order++;
        });
    });

    sync2.owlCarousel({
        center : false,
        loop : false,
        items : 3,
        autoplay:false,
        margin:30,
        dots: false,
        nav:true,
        navText: [
        "<i class='sync2-nav ion-chevron-left'></i>",
        "<i class='sync2-nav ion-chevron-right'></i>"
        ],
        touchDrag:true,
        mouseDrag:true,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
        
    });    

    sync2.find('.owl-item').on('click', function() {

        var number = $(this).find('.item').attr("data-item-no"); 
        sync1.trigger('to.owl.carousel', [number, 1, true]);
    });

    $(".team-synced-owl #sync2 .item").on('click',function() {
        $(".team-synced-owl #sync2 .item").find('.bubba-grid').removeClass('sync-active');
        $(this).find('.bubba-grid').addClass('sync-active');
    });

    // Backstretch code for the images fading in the first about section in sync1
    $('.backstretch-carousel-wrap').each(function() {
        var back_items = [];
        $(this).find('.backstretch-carousel').hide();
        $(this).find('.backstretch-slide').each(function () {
            back_items.push(this.src);
        });
        var options = {
                        fade: "slow",
                        duration: 4000
        };
        $(this).backstretch(back_items,options);
        setTimeout(function(){
            $(this).find('img').attr('data-no-retina','');
        },700);
    });    


    

    //Equi-heigh Divs
    if(vW > 100)
    {
        var maxHeight = -1;

        $('.equal-height-sync-car').each(function() {
         maxHeight = maxHeight > $(this).outerHeight() ? maxHeight : $(this).outerHeight();
        });

        $('.equal-height-sync-car').each(function() {
         $(this).outerHeight(maxHeight);
        });

        $('.backstretch-carousel-wrap').outerHeight(maxHeight);
    }




    var abt_sr_btn_no = $('.section-slider .section-slider-item').length;
    var abt_sr_btn_wth = 100/abt_sr_btn_no;
       
    

    $('.section-slider').on('initialized.owl.carousel', function(event) {
            $('.section-slider .section-slider-item').each(function(){
            var section_slider_txt = $(this).find('.section-slider-item-name').html();
            var section_slider_order = $(this).find('.section-slider-item-name').data('order');
            $('.section-slider .owl-dots .owl-dot:nth-child('+section_slider_order+')').find('span').html(section_slider_txt);
        });

        $('.section-slider .owl-dots .owl-dot span .hidden-wrap').on('click', function() {
        $(this).closest('span').trigger('click');
        return false;
        });    

        // Pagination to get on top
        var thisItem = $('.section-slider');
        var owlControls = thisItem.find('.owl-controls');
        var elem = thisItem;
        owlControls.prependTo(elem);

    });

    $('.section-slider').owlCarousel({
        
        center : false,
        loop : true,
        items : 1,
        autoHeight: true,
        autoplay:false,
        margin:0,
        nav : false,
        touchDrag:false,
        mouseDrag:false
    });


    $('.section-slider.owl-theme .owl-dots .owl-dot').css('width',abt_sr_btn_wth + '%');

    setTimeout(function() {
        $('.logo-owl').owlCarousel({
            center : false,
            loop : true,
            dots: false,
            autoplay:true,
            autoplayTimeout:4000,
            autoplaySpeed:1000,
            items : 4,
            margin:0,
            nav : false,
            touchDrag:true,
            mouseDrag:true,
            responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          900:{
              items:3
          }
         } 
        });
        $('.section-slider .owl-controls .button-section.active-button .overlay').fadeOut();
        $('.section-slider .owl-controls .button-section').on('click', function() {
            if($(this).hasClass('active-button')) {

            }
            else {
                $('.section-slider .owl-controls .button-section .overlay').fadeIn();
                $('.section-slider .owl-controls .button-section').removeClass('active-button');
                $(this).addClass('active-button');
                $(this).find('.overlay').fadeOut(); 
            }
            
        });

    },500);



    $('.statistic-wrap').each(function(){
        var statsCount = $(this).find('.statistic-block').length;
        var reminderItems = statsCount%3;
        if(reminderItems == 0) {
            for(var i= statsCount; i > statsCount-3; i--)
                {
                    $(this).find('.statistic-block:nth-child('+i+')').css('border-bottom','0px'); 
                } 
        } 
        else
        {
            for(var i=statsCount; i > statsCount - reminderItems; i--)
                {
                    $(this).find('.statistic-block:nth-child('+i+')').css('border-bottom','0px');
                }
        }
    });

    $('.hidden-wrap .active-timer').closest('.owl-dot').on('click',function() {
        $('.timer').countTo({
            speed: 1500
        });   
    });

    $('.one-section-owl-no-pag-no-nav').owlCarousel({
        center : false,
        loop : true,
        dots: false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        items : 1,
        margin:0,
        nav : false,
        touchDrag:true,
        mouseDrag:true
    });
      

  //Parallax INIT
  //Initialize Each Parallax Layer  
  function parallaxInit() {
    $('.parallax, .parallax-layer').each(function() {
        $(this).parallax("30%", 0.1);
    });

    $('.section-slider.owl-theme .owl-controls').parallax("30%", 0.1);


  } 

  if( !device.tablet() && !device.mobile() ) {

      //Activating Parallax effect if non-mobile device is detected
      $(window).bind('load', function () {
        parallaxInit();             
      });


  } else  {
        
      //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
      $('.parallax, .parallax-layer').addClass('no-parallax');
      $('.section-slider.owl-theme .owl-controls').addClass('no-parallax');  
      }
            
    // Portfolio isotope Init

    var $container = $('#container');


    $container.imagesLoaded( function() {
      $container.isotope({
        itemSelector : '.element',
        //gutter:'gutter-sizer',
        //layoutMode : 'masonry',
        masonry: {
          gutter: '.gutter-sizer'
        }
      });
    });  
 
      
      
    var $optionSets = $('#options .option-set'),
      $optionLinks = $optionSets.find('a');

    $optionLinks.on('click',function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // creativewise, apply new options
          $container.isotope( options );
        }

        return false;
    });


    // Portfolio FeatherLight Initializations

    $('.feather-image').featherlight({
      closeIcon: "<i class='icon main ion-android-close'></i>"        /* Code that is used as close icon */ 
    });
    $('.feather-iframe').featherlight({
      iframeMaxWidth: '100%', 
      iframeWidth: 500, 
      iframeHeight: 300,
      closeIcon: "<i class='icon main ion-android-close'></i>"        /* Code that is used as close icon */ 
    });
    
    $('a.feather-gallery').each(function() {
      var gallery_id=$(this).data('gallery');
      $('[data-gallery="'+gallery_id+'"]').featherlightGallery({
        previousIcon: "<i class='icon main ion-chevron-left'></i>",     /* Code that is used as previous icon */
        nextIcon: "<i class='icon main ion-chevron-right'></i>",        /* Code that is used as next icon */
        closeIcon: "<i class='icon main ion-android-close'></i>",        /* Code that is used as close icon */ 
        openSpeed:    300,
        closeSpeed:   300
      });
    });


  //Portfolio Timer Section

    var port_flg_tmr = 0;
    var worked_once = 0;
    var port_timer_offset = vH;

      setTimeout(function(){
        $('#portfolio-timer').waypoint(function (direction) {

            if (direction === 'down' && worked_once === 0) {
              $('.portfolio-timer .timer').countTo({
                speed: 1500
              }); 
              worked_once = 1;
            } 

          },{ offset: port_timer_offset });

      },500);



//Services section

setTimeout(function() {
var service_overlay = $('.service-video-btn-overlay .service-overlay-content').outerHeight();
$('.service-video .service-video-wrap').height(service_overlay);
},200);

  
  var serv_video_offset = vH*2;

  if( !device.tablet() && !device.mobile() ) {

      setTimeout(function() {
        $('.service-video-wrap').waypoint(function (direction) {

            if (direction === 'down') {
              $(".player").YTPlayer(); 
            } 

          },{ offset: serv_video_offset });
      },1500);

       
    } 
  else  {
     
      //Adjusting Intro Components Spacing based on detected screen resolution
      $(".player").addClass('poster-img');
  }    

     
  var $container_news = $('#news-container');
  // initialize
  $container_news.imagesLoaded( function() {
    $container_news.masonry({
      columnWidth: '.item',
      gutter: '.news-gutter-sizer',
      itemSelector: '.item'
    });
  });  
   
    //TWITTER INIT (Updated with compatibility on Twitter's new API):
    //PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
    $('#ticker').tweet({
        modpath: './twitter/',
        count: 1,
        loading_text: 'loading twitter update...',
        username:'unbrandedco'
        /* etc... */
    });


  var $container_team = $('#team-wrap');
    // initialize
    $container_team.imagesLoaded( function() {
        $container_team.masonry({
          columnWidth: '.team-item',
          gutter: '.team-gutter-sizer',
          itemSelector: '.team-item'
        });
    });  


//Metro Panel - calculating the height of the tile
    var metro_wdth = $("#metro-panel .tile img").width();
    $('#metro-panel .tile').each(function() {
        $(this).css('height',metro_wdth);
    });
    

    //Metro Panel - Rotating Tiles
    $('#metro-panel .thumb').on('rotate',function(){
    var thisOne = $(this);
    thisOne.addClass('active');
    var time =getRandomInt(3,10)*1000;
    setTimeout(function(){
      thisOne.removeClass('active');
    },time);
    });
    setInterval(function(){
    var thumbs = $('#metro-panel .thumb:not(.active)');
    $(thumbs[getRandomInt(0,thumbs.length)]).trigger('rotate');
    },3000);

  

    //Custom functions 

    /**
     * Returns a random integer between min and max
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



// contact section
    
// When the window has finished loading create our google map below

google.maps.event.addDomListener(window, 'load', init);

  

  

  function init() {
      setTimeout(function() {

        $('.contact-map-section').waypoint(function (direction) {

            if (direction === 'down') {

            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 11,
                // Zooming of map during scroll wheel movement is set to false
                scrollwheel: false,
                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.6700, -73.9400), // New York

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Micah!',
                icon: new google.maps.MarkerImage(
               "images/m2.png",
               new google.maps.Size(50, 50, "px", "px")
             )
            });              

            } 

          },{ offset: vH });

      },1000);
  }

  var contact_btn_no = $('.contact-button-wrap .contact-button-each').length;
  var contact_btn_wdth = 100/contact_btn_no;
  $('.contact-button-wrap .contact-button-each').css('width',contact_btn_wdth+'%');

    //Equi-heigh Divs
  if(vW > 100)
  {
    var maxHeight = -1;

    $('.contact-text-each').each(function() {
     maxHeight = maxHeight > $(this).outerHeight() ? maxHeight : $(this).outerHeight();
    });

    // $('.contact-text-each').each(function() {
    //  $(this).outerHeight(maxHeight);
    // });

    $('.contact-text-container').outerHeight(maxHeight);
  }

  var contact_width = $('.contact-details-wrap').width();
  $('.contact-text-wrap').width(contact_width*contact_btn_no);
  $('.contact-text-each').width(contact_width);

  var initial_act_btn = $('.contact-button-wrap .contact-button-each.contact-button-active').attr('data-btn-no');
  $('.contact-text-wrap .contact-text-each').each(function() {
    var data_text_no = $(this).attr('data-text-no');
    if(initial_act_btn == data_text_no) {
      $('.contact-text-container').height($(this).outerHeight());
    }
  });
  var left_pos = (initial_act_btn - 1)*contact_width;
  $('.contact-text-wrap').animate({left: -left_pos+"px"});
      

  $('.contact-button-wrap .contact-button-each').on('click',function(){
    if($(this).hasClass('contact-button-active')) {    }

    else {
      $('.contact-button-wrap .contact-button-each').removeClass('contact-button-active');
      $(this).addClass('contact-button-active');
      var data_btn_no = $(this).attr('data-btn-no');
      $('.contact-text-wrap .contact-text-each').each(function() {
        var data_text_no = $(this).attr('data-text-no');
        if(data_btn_no == data_text_no) {
          $('.contact-text-container').height($(this).outerHeight());
        }
      });
      var left_pos = (data_btn_no - 1)*contact_width;
      $('.contact-text-wrap').animate({left: -left_pos+"px"});
    }
    setTimeout(function() {
      $("html, body").animate({
        scrollTop: $('.contact-details-wrap').offset().top-80 + "px"
      },800); 
    },100);   
  });


  // Contact Form Ajax Section

  $('#contactForm').submit(function(){
    $('.md-content').hide();
    $('.launch_modal').trigger("click");
    //alert(1);
    $.ajax({
      type: $("#contactForm").attr('method'),
      url: $("#contactForm").attr('action'),
      data: $("#contactForm").serialize(),
      success: function(data) {
        if(data == 'success')
        {
            $('#contactForm').each (function(){
                this.reset();
            });
            $('.md-content').show();
        }
        else
        {
          $('.md-content').show();
          $('.md-content h3').html('Something went wrong!');
          $('.md-content p').html('Please try again.');
        }
      }
    });
    return false;
  });




  


})();
//  JSHint wrapper $(function ($)  : ends


















    





