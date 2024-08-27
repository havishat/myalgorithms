function findFirstRepeatedChar(str){
  let charCount = new Map();

  for(let ch of str){
    if(charCount.has(ch)){
      return ch
    } else {
      charCount.set(ch, 1)
    }
  }

  return '\0';
}


console.log(findFirstRepeatedChar("geeksforgeeks"))
