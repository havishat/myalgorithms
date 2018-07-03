function reverstirng(str){
    str2 = ""
    str3 =  ""
    for(var i = str.length-1;i>=0;i--){
      str2 += str[i]
    }
    j=0
    k=0
    stack = []
    // while(j<str2.length){
      for(var j = 0; j<str.length; j++){
      if(str2[j] == "."){
        str3 += str2[j]
      } else if(str2[j] == " "){
         
          while(stack.length){
            str3 += stack.pop()
          }
           str3 += str2[j]
        } else {
          var ch = str2.charAt(j);
            stack.push(ch);
        }
    }
  
     if (stack.length) {
          str3 += " ";
          while(stack.length !== 0){
              str3 += stack.pop()
          }
      }
  
    // while
    
    console.log(str2)
    console.log(stack)
    console.log(str3)
  }
  
  
  console.log(reverstirng("I love microsoft."))


  // console.log("I love microsoft.")

//temp = l-1
//reverse += str2[temp--]

//increment j to hit a string char
//increment k to hit a non-string char
//copy k-1 to temp



function reverstring(str){
    str2 = "";
    str3 = "";
    reverse = ""
    str4 = ""
    for(var i=str.length-1;i>=0;i--){
      str2 += str[i]
    }
    var k = 0;
    var j = 0;
    var temp = 0
    console.log(str2)
    while(j<str2.length){//str2.length
      temp = j
      if(str2[j] == "."){
        reverse += str2[j]
        // k++
        
        console.log(". index",j)
        j++
      } else if(str2[j] == " "){
        reverse += str2[j]
        
        console.log("space index",j)
        j++
      } else {
        //j hits a string char
        //.tfosorcim.evol I
        console.log("char start index",j)
        k = j
        while (str2[k] != ' '  && str2[k] != ".") {
          //console.log("k incrementing", k, str2[k])
          k = k + 1
          if (k == str2.length) {
            break
          }
        }
        temp = k-1
        while ( temp >= j) {
          reverse += str2[temp--]
        }
        j = k
      }
      //j++
      // k++
      //console.log(j,k)
      }
      
    // console.log(str2)
    // console.log(str3)
    // console.log(str4)
    console.log(reverse)
  }
  
  console.log(reverstring("I love microsoft."))