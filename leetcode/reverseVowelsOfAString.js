// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

// Note:
// The vowels does not include the letter "y".

var reverseVowels = function(s) {
    start = 0
    end = s.length
    list = s.split("")
    
    while(start < end){
        if(!helper(list[start])){
            start ++
            continue 
        }
        
        if(!helper(list[end])){
            end--
            continue
        }
        temp = list[start]
        list[start] = list[end]
        list[end] = temp
        
        start++
        end--
        
    }
    return list.join("")
};


var helper = function(c){
    return (c == "a" || c=="e" || c=="i" || c=="o" || c== "u" || c=="A" || c=="E" || c=="I" || c=="U" || c=="O")
}



// var reverseVowels = function(s) {
//     if(s === null || s.length === 0) {
//         return s;
//     }
//     var chars = s.split('');
//     var low = 0;
//     var high = s.length - 1;
//     var vowels = "aeiouAEIOU";
//     var tmp;
//     while(low < high) {
//         while(low < high && vowels.indexOf(chars[low]) === -1) {
//             low++;
//         }
        
//         while(low < high && vowels.indexOf(chars[high]) === -1) {
//             high--;
//         }
        
//         tmp = chars[high];
//         chars[high] = chars[low];
//         chars[low] = tmp;
//         low++;
//         high--;
//     }
    
//     return chars.join('');
// };