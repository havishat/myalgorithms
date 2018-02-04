var countSubstrings = function(s) {
    var N = s.length, ans = 0;
         for (var center = 0; center <= N-1; ++center) {
             var left = center / 2;
             var right = left + center % 2;
             console.log(s.charAt(left))
          
             while (left >= 0 && right < N && s.charAt(left) == s.charAt(right)) {
                 ans++;
                 left--;
                 right++;
             }
         }
         
         return ans;
     
 };
 
 console.log(countSubstrings('aaa'))