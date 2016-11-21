document.getElementById("message").classList.remove("blue");


document.getElementById("button-add").addEventListener("click", function() {
	document.getElementById("message").classList.add("orange");
});


document.getElementById("button-remove").addEventListener("click", function() {
   document.getElementById("message").classList.remove("orange");
});