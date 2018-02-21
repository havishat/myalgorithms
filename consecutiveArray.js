// Write a function that takes an array of numbers as an argument.
// The function should return a number that represents the sum of
// any numbers that have a consecutive match.

// [6, 5, 4, 6, 6, 1, 8, 8]
// -> 14

// [5, 1, 5, 5, 5]
// -> 10

// [6, 6]
// -> 6


function consecutive(array) {
    var newarray = []
    for(var i =0; i<array.length; i++){
      // console.log(array[0])
      if(array[i] == array[i+1]) {
        // console.log(array[i])
        // return true
        newarray.push(array[i])
        // console.log(newarray)
      }
      // console.log(newarray)
    }
     var sum = 0;
    for(var j=0; j<newarray.length; j++){
      // console.log(newarray[j])
      sum += newarray[j]
      // console.log(sum)
    }
    return sum
  }
  
  console.log(consecutive([6, 6]))

// Write a function that takes an array of numbers as an argument.
// The function should return T if there is at least one 
// consecutive match in the input list. The function should return F
// if there are no consecutive matches.

// [6, 5, 4, 6, 6, 1, 8, 8]
// -> T

// [4, 3, 4]
// -> F

console.log('Hello world');

// 1) for loop iterate the array 
// 2) if statment to array[i] == array[i+1]  if it then it will push it new array 
// sum all the values in the new array 


function consecutive(array) {
  var newarray = []
  for(var i =0; i<array.length; i++){
    // console.log(array[0])
    if(array[i] == array[i+1]) {
      // console.log(array[i])
      return true
    }
  }
  return false
}

console.log(consecutive([6, 6]))