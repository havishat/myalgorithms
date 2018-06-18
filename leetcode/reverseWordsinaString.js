var reverseWords = function(str) {
   
    arr = str.trim().split(/\s+/)
    console.log(arr)
  
  
  
    for(var i=0; i<arr.length/2; i++){
      temp = arr[i]
      arr[i] = arr[arr.length-1-i]
      arr[arr.length-1-i] = temp
    }
  
    str = arr.join(" ")
    if (str == "") {
      return ""
    }
    return str
      
  };