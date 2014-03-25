'use strict';

MyCompany.controller('IndexController', function IndexController($scope){


	$scope.moveToSection = function(section) {
		$('html, body').animate({
				scrollTop: $("#container-"+section).offset().top
		}, 500);

		$( "#container-news" ).animate({opacity:0.4},200);
		$( "#container-portofolio" ).animate({opacity:0.4},200);
		$( "#container-contact" ).animate({opacity:0.4},200);
		$( "#container-about" ).animate({opacity:0.4},200);

		$( "#container-"+section ).fadeTo( 1800 , 0.9, function() {
    	
  		});
		
	}	
});