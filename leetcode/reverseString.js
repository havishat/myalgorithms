// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".
// 344. Reverse String
var reverseString = function(s) {
    var y = []
      for(var i=0;i<=s.length-1;i++) {
          temp = s[s.length-i-1]
          y.push(temp)
         
      }
      return y.join('')
      
  };
  
  console.log(reverseString("hello"))

  var reverseString = function(s) {
    var result = "";
    for (i=s.length-1; i >= 0; i--) {
        result += s[i];
    }
    return result;
};

  var reverseString = function(s) {
    var arr = []
    var result = ""
    arr = s.split("")
    for(var i=arr.length-1;i>=0;i--) {
        result = result + arr[i]
    }
    return result
};

var reverseString = function(s) {
    let reverse = '';
    
    let index = s.length - 1;
    
    while (index >= 0) {
        reverse = reverse + s.substr(index, 1);
        index--;
    }
    
    return reverse;
};