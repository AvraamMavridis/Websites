'use strict';

Artist.controller('IndexController', function IndexController($scope){
	var document_height = $( document ).height();
	$("#sidebar").css({height:document_height});
	$("#main-container").css({height:document_height});	

	

	
});