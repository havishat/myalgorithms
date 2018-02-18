//"  I like cats"
function reversestring(str){
    var stack1 = []
    
    var reversed = ""
    for (var i = 0; i < str.length; i++) {
        
        if(str[i] == " "){
            reversed += str[i]
            // console.log(str2)
            while(stack1.length !== 0){
            reversed += stack1.pop()
            }
                // reversed += stack1.pop()
        } else {
            var ch = str.charAt(i);
            stack1.push(ch);
        
        }
     
    }
    if (stack1.length) {
        reversed += " ";
        while(stack1.length !== 0){
            reversed += stack1.pop()
        }
    }
      
      
    return reversed
    }
    
    console.log(reversestring(" i like cats"))