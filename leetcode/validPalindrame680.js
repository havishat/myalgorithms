// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

// two pointers a and b which should be same 
// check the length 


var isPalindrome = function(s) {
    start = 0;
    end = s.length - 1;
    
    while(start < end){
        if(!s[start].match(/[a-z]/i)){
            start++
            continue
        }
        if(!s[end].match(/[a-z]/i)){
            end--
            continue
        }
        
        if(s[start].toLowerCase() != s[end].toLowerCase() ){
            return false
        }
        
        start++
        end --
    }
    return true

}