
/*
266. Palindrome Permutation
Description
Given a string s, return true if a permutation of the string could form a palindrome and false otherwise.

*/

var palindromepermutation = function(str){
  let perSet = new Set();

  for(let s of str){
    if(perSet.has(s)){
      perSet.delete(s)
    } else {
      perSet.add(s)
    }

  }

  return  perSet.size <= 1
}

console.log(palindromepermutation("carrace"))
