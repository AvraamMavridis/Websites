'use strict';

Artist.controller('IndexController', function IndexController($scope){
	var document_height = $( document ).height();
	$("#sidebar").css({height:document_height});
	$("#main-container").css({height:document_height});	

	$('.newsticker').newsTicker({
			    row_height: 48,
			    max_rows: 6,
			    speed: 600,
			    direction: 'up',
			    duration: 4000,
			    autostart: 1,
			    pauseOnHover: 0,
			    prevButton:  $('#uparrow'),
			    nextButton:  $('#downarrow')
		});	

	
});