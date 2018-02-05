// 647. Palindromic Substrings
// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
// Note:
// The input string length won't exceed 1000.

var countSubstrings = function(s) {

    var N = s.length, ans = 0;
         for (var center = 0; center <= 2*N-1; ++center) {
             var left = center / 2;
             var right = left + center % 2;
          
          
             while (left >= 0 && right < N && s.charAt(left) == s.charAt(right)) {
                 ans++;
                 left--;
                 right++;
             }
         }
         return ans;
     
 };

//fast8 9 ms solution
 /**
 * @param {string} s
 * @return {number}
 */
// O(n^2) time; O(1) space;
const countSubstrings = (str) => {
    let counter = 0;
    
    for (let i = 0; i < str.length; i++) {
      let start = i;
      let end = i;
      
      while (start >= 0 && end < str.length && str[start] === str[end]) {
        counter += 1;
        start -= 1;
        end += 1;
      }
    }
    
    for (let i = 0; i < str.length - 1; i++) {
      let start = i;
      let end = i + 1;
      
      while (start >= 0 && end < str.length && str[start] === str[end]) {
        counter += 1;
        start -= 1;
        end += 1;
      }
    }
    
    return counter;
  };
  /*
  var countSubstrings = function(s) {
      if (s.length === 0) return 0;
      let counter = 0;
      const dp = new Map();
   
      for (let j = 0; j < s.length; j++) {
          for (let i = 0; i <= j; i++) {
              const key = `${i},${j}`;
              let isPalindrome;
  
              if (j - i <= 1) {
                  isPalindrome = s[i] === s[j];
              } else {
                  isPalindrome = s[i] === s[j] && dp.get(`${i+1},${j-1}`); 
              }  
  
              dp.set(key, isPalindrome);
              if (isPalindrome) {
                  counter += 1;
              }
          }
      }
      return counter;
  };
  */