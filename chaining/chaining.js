
console.log("Hello Js");


//initialize variable

var integers = [13,25,6,3,11,2,18,7,21,1,29,20,12,8];
console.log("Input Array: [" + integers + "]");


//funtion to srt the array value

function myFunction(){
	integers.sort(function(a, b) {return b- a;});
}
myFunction();
console.log("Sorted Array in Descending Order: [" + integers + "]");

//function to remove array elements grater than 19
  function mynumbers(numbers) { 
    return numbers < 19; 
}

 var filtered = integers.filter(mynumbers);
 console.log("Removed values greater than 19: [" + filtered + "]"); 

// function to calculate
var Multi = filtered.map(function(newfiltered) {
  return (newfiltered * 1.5)-1;
});
console.log("Filtered array elements multiplied by 1.5 and 1 substracted from it: [" + Multi + "]");






/*Sort the numbers in descending order (10, 9, 8, 7, etc).
Remove any integers greater than 19.
Multiply each remaining number by 1.5 and then subtract 1.
Then output (either in the DOM or the console) the sum of all the resulting numbers.
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];*/