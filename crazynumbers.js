// Given the array of numbers below, use accumulator functions to return a new array that results from 



//doubling the odd numbers and ---> Filter out evens
//throwing out the even ones ---> use map double results

 
 
 

// console.log("The doubled numbers are", newNumbers);




function filterArray(array) {
	 var newNumbers = [];
	 
	 for (var i = 0; i < array.length; i++){
	 	if (array[i] % 2 === 1) {        // returning an odd number - Modulo 
		 	newNumbers.push(array[i]) *2;   // if odd from line 21 put into new numbers array 
	 	}
	 }
	 return newNumbers;
}

var numbers = [1, 2, 3, 4];



document.getElementById("odd")innerHTML("newNumbers");



