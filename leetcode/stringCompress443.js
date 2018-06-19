
// Given an array of characters, compress it in-place.

// The length after compression must always be smaller than or equal to the original array.

// Every element of the array should be a character (not int) of length 1.

// After you are done modifying the input array in-place, return the new length of the array.


// Follow up:
// Could you solve it using only O(1) extra space?

/**
https://leetcode.com/problems/string-compression/description/
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if (chars.length == 0 || chars.length == 1){
      return chars.length
    }
    newIndex = 0
    currChar = chars[0]
    currLen = 1
    for(var i=1;i<chars.length;i++) {
      if (chars[i] == currChar) {
        //We already started counting this char
        currLen = currLen + 1;
      } else {
        //It's a new char, we need to start counting from 1
        //But before that, we need to convert the previous count to char
        chars[newIndex++] = currChar
        if (currLen > 1) {
          var numCharArr = intToChar(currLen)
          for (var j=0;j<numCharArr.length;j++) {
            chars[newIndex++] = numCharArr[j]
          }
        }
        currChar = chars[i]
        currLen = 1
      }
    }
    if (currLen != 0) {
      chars[newIndex++] = currChar
      if (currLen > 1) {
        var numCharArr = intToChar(currLen)
        for (var j=0;j<numCharArr.length;j++) {
          chars[newIndex++] = numCharArr[j]
        }
      }
    }
    console.log(chars)
    return newIndex
};

function intToChar(number) {
  //console.log("Splitting", number)
  charnumArr = []
  while (number > 0) {
    d = number % 10
    //ASCII code of 0 is 48, so if need the ASCII code of a num, just add 48 to that num
    //Ex: 0 - 48
    //Ex: 5 - 53 (48+5)
    charnumArr.push(String.fromCharCode(48+d))
    number = Math.floor(number / 10)
  }
  //Reverse the array, since when we convert the num to individual chars, we append it in Reverse
  //Ex: 245 -> gets added as ["5","4","2"]
  return charnumArr.reverse()
}

n = 1
console.log(String.fromCharCode(48+n))
console.log(intToChar(245))
arr = ["a","a","b","b","c","c","c"]
//arr = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
//arr = ["a"]
console.log(compress(arr))