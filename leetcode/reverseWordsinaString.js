// Given an input string, reverse the string word by word.

// Example:  

// Input: "the sky is blue",
// Output: "blue is sky the".
// Note:

// A word is defined as a sequence of non-space characters.
// Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
// Follow up: For C programmers, try to solve it in-place in O(1) space.


var reverseWords = function(str) {
   
    arr = str.trim().split(/\s+/)
    console.log(arr)
  
  
  
    for(var i=0; i<arr.length/2; i++){
      temp = arr[i]
      arr[i] = arr[arr.length-1-i]
      arr[arr.length-1-i] = temp
    }
  
    str = arr.join(" ")
    if (str == "") {
      return ""
    }
    return str
      
};

console.log(reverseWords("the sky is blue"))

// var reverseWords = function(str) {
//     let words = str.split(' ');
//     let newWords = [];
//     for (let i = words.length - 1; i >= 0; --i) {
//         if (words[i].length > 0) {
//             newWords.push(words[i]);
//         }
//     }
//     return newWords.join(' ');
// };