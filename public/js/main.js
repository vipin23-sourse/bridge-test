"use strict"

$(document).ready(function(){

// mobile menu

  $('.icon-menu').click(function () {
    $('.mob-menu').addClass('slide-up')
  });
  
  $('.closeBtn').click(function () {
  
    $('.mob-menu').removeClass('slide-up')
  });
  
  $('.mob-menu ul li a').click(function () {
    $('.mob-menu').removeClass('slide-up')
  });

// navbar fixed

  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 1000) {
	    $(".header__wrap").css("padding" , "1rem 0");
      $(".header__head").addClass("fixed-nav");
	  }

	  else{
		  $(".header__wrap").css("padding" , "3.2rem 0");  
      $(".header__head").removeClass("fixed-nav");
	  }
  })
})