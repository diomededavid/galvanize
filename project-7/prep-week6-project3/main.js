/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {  
   

    
// Question #1
	//1. 

	$('.changeColor').click(function() {
    $('ul li:nth-child(3)').css('color', '#8A2BE2');
  });

// Question #2

    $('ul li:nth-child(4)').click(function() {
	$('li:nth-child(4)').append($("li:first").clone(true));
});

// Question #3
	$('#removeLi').click(function() {
	$('ul li:nth-child(2)').remove();
});

// Question #4
   
    



// Question #5  
  

  // Question #6	
	

	
// Question #7
  
  
  
  // Question #8




});