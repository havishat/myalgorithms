//social capital second question 
// Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
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