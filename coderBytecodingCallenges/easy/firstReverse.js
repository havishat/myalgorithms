// Challenge
// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 
// Sample Test Cases
// Input:"coderbyte"

// Output:"etybredoc"


// Input:"I Love Code"

// Output:"edoC evoL I"

// Hint
// Think of how you can loop through a string or array of characters backwards to produce a new string.

function FirstReverse(str) { 

  // code goes here 
  var temp = ""
  for(var i=str.length-1; i>=0;  i--){
    temp = temp + str[i]
  } 
  return temp;     
}
   
// keep this function call here 
console.log(FirstReverse("coderbyte"));    