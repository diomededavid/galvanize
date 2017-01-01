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
   
  	$('ul li:nth-child(5)').click(function() {
		$(this).css('font-size', '40px');
		$(this).hide().not( $("ul li:nth-child(5)"));
});  


// Question #5  
    $('.cute').click(function() {
		$('.clones').append($(".cute").clone(true));
});

  // Question #6	
	$('body').dblclick(function() {
		$('#makeSquare').css('border-radius', '0');
});

// Question #7
 

	$('swatches.black').on('click', function() {
		$('body').toggleClass('body.black');
});

  
  // Question #8

$('.cute').click(function() {

  $("hover").each(function() {

    if (this.style.color !== "red") {
      this.style.color = "red";
    } else {
      this.style.color = "";
    }

  });
}



});