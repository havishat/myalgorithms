// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?



var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
     dict = {}

  for(var i=0;i<s.length;i++){
    if(s[i] in dict){
      dict[s[i]]++
    } else {
      dict[s[i]] = 1
    }
  }
  for(var j=0; j<t.length;j++){
    if(t[j] in dict){
      dict[t[j]]--
    }
  }
  for(c in dict){
    if(dict[c] > 0){
      return false
    }
  }
  return true
};

console.log(isAnagram("a","ab"))