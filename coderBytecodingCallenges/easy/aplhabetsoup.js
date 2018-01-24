// have the function alphabetsoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order
// ex: hello becomes ehllo. Assume numbers and punctuation symbolls will not be included in the string. 

function AlphabetSoup(str) { 

    // code goes here 
    // convert the string into an array of characters
    var chars = str.split("");
    console.log(chars)
  
    // sort the array in alphabetical order
    var sorted = chars.sort();
    console.log(sorted)
    
    // return the newly sorted string
    return sorted.join("");
    
  //   return str; 
           
  }
     
  // keep this function call here 
  console.log(AlphabetSoup("hello"));