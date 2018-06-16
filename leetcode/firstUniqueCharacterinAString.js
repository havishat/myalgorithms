// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

var firstUniqChar = function(s) {
    var dict = {}
    for(var i=0;i<s.length;i++){
        if(s[i] in dict){
            dict[s[i]]++
        } else {
            dict[s[i]] = 1
        }
    }
    
    for(var j=0; j<s.length;j++){
        if(dict[s[j]] == 1){
            return j
        }
    }
    return -1
};