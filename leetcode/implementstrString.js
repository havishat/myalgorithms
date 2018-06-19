//no mine solution 
// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


//This function returns the start index of substring needle in original
// string haystack, returns -1 if there was no match
var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) {
      return -1;
    }
    if (needle.length == 0 || haystack.length == 0){
      return 0;
    }
    console.log("Checking if ", needle, " is a substring of ", haystack);
    i = 0 //Index of original string
    j = 0 //Index of substring
    substIndex = -1 //Index where needle starts in haystack
    while (i < haystack.length && j < needle.length) { 
      if (haystack[i] == needle[j]) {
        //If this is first index where needle is matching haystack, then mark the index
        if (substIndex == -1) {
          substIndex = i;
        }
        i += 1;
        j += 1;
      } else {
        //If there was a match for initial few chars but didn't match // // the entire needle string, then start from the next index where
        // there was a match before
        if (substIndex !== -1) {
          i = substIndex + 1;
        } else {
          i += 1;
        }
        j = 0;
        substIndex = -1;
      }
    }
    if (j == needle.length) {
      return substIndex;
    }
    return -1;
  }
  
  //haystack = "aabbcc"
  //needle = "aabbcc"
  //haystack = "abaabbcc"
  //needle = "aabbcc"
  //haystack = "aaabbcccc"
  //needle = "aabbcc"
  haystack = "mynameisharry"
  needle = "arry "
  console.log("Is ", needle, " a substring of ", haystack, "? ", strStr(haystack, needle))