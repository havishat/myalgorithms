// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false


var isPalindrome = function(s) {
    start = 0;
    end = s.length - 1;
    
    while(start < end){
        if(!s[start].match(/[a-z0-9]/i)){
            start++
            continue
        }
        if(!s[end].match(/[a-z0-9]/i)){
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
    
};


// var isPalindrome = function(s) {
//     start = 0;
//     end = s.length - 1;
//     if(s == null){
//        return false; 
//     } 
//     if(s.length < 2) {
//         return true;
//     } 
    
//     while(start < end){
//         if(!isAlpha(s[start]) && isNum(s[start])){
//             start++
//             continue
//         }
//         if(!isAlpha(s[end]) && isNum(s[end])){
//             end--
//             continue
//         }
        
//         if(s[start].toLowerCase() != s[end].toLowerCase() ){
//             return false
//         }
        
//         start++
//         end --
//     }
//     return true
    
// };

//     function isAlpha(a){
//         if((a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z')){
//             return true;
//         }else{
//             return false;
//         }
//     }

//     function isNum(a){
//         if(a >= '0' && a <= '9'){
//             return true;
//         }else{
//             return false;
//         }
//     }


// https://www.programcreek.com/2013/01/leetcode-valid-palindrome-java/