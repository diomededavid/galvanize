/*
=======================================================

** Week 4 - Project 2**
*** jQuery Mania ***


=======================================================
*/

// Add your JS here.


$(document).ready(function() {  
    
    
//1. 
    $("button.alertme").click(function(){
        alert("The button was clicked.");
    });
   
//2.  
    
    $('button.clickme').click(function(){
           $(this).text('I was clicked');
     });
    
//3. 
  
  $('.addStyle').click(function(){
		$( ":button" ).toggleClass( "buttonStyle" );
	});
  
	    
//4.
 	$('.addDifferentStyle').click(function(){
		$(this).toggleClass( "addUniqueStyle" );
	});

//5. 
	$(':button').click(function(){
		$(":button").removeClass( "addStyle addDifferentStyle" );
	});
	
//6.

	$('.clickToggle').click(function(){
		$("clickToggle").toggleClass( "buttonStyle" );
	});
	
//7.

	$('button.squareBtn').click(function(){
		$("div.square").remove();
	});
	
//8.
	$('.circle').click(function(){
		$(this).remove();
	});


//9.

	$(".toggleRedSquare").click(function() {
    	$(".redSquare").fadeToggle(1500);
  });



});  // Close: $(document).ready(function() { 
	
	

	
	
