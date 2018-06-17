// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
// Note:
// You may assume both s and t have the same length.

var isIsomorphic = function(s, t) {
    let hashmap1 = {}, hashmap2={};
     if(s.length!==t.length) {
         return false;
         
     }
     for(let i=0, len=s.length; i<len; i++){
         if(!hashmap1[s[i]]){
         hashmap1[s[i]]=t[i];
       } else if(hashmap1[s[i]]!==t[i]) {
         return false;
       } 
         if(!hashmap2[t[i]]) {
         hashmap2[t[i]]=s[i];
       } else  if(hashmap2[t[i]]!==s[i]) {
         return false;
       } 
     }
 
     return true;
     
 };