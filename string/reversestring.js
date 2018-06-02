function StackNode(val){
    this.val = val;
    this.next = null;
  }
  
  function Stack(){
    this.top = null;
    this.length = 0;
  }
  
 var push = function(s, val){
    // var top = this.top;
    var newmember = new StackNode(val);
    if(!s.top){
      s.top = newmember
  
    } else {
        newmember.next = s.top;
        s.top = newmember;
  
    }
    console.log(`${val} has been added to the stack`);
    return s.top
  }
  
  var pop = function(s){
    // var top = this.top;
    if(!s.top){
      console.log("Nothing to stack")
      return null
    } else {
      temp = s.top;
      s.top = s.top.next;
      return temp.val
    } 
  }
  
  var front = function(s) {
    // var top = this.top
    if(!s.top){
      console.log("Nothing to stack")
      return null
    } else {
      return this.top.val
    }
  }
  
  var isEmpty = function(s) {
    // var top = this.top
    if(!s.top){
      console.log("Nothing in stack")
      return true
    } else {
      console.log("Stack is not Empty")
      return false
    }
  }


function reversestring(str){
    var s = new Stack()
    var reversed = " "
    
    for (var i = 0; i < str.length; i++) {
        
        if(str[i] == " "){
            reversed += str[i]
            console.log("reversed is ", reversed)
            while(isEmpty(s) == false){
            // console.log(pop(s))
            reversed += pop(s)
            }
            //console.log("reversed after stack is ", String(reversed))
                // reversed += stack1.pop()
        } else {
            // var ch = str.charAt(i);
            push(s,str[i]);
        
        }
     
    }
    if (isEmpty(s) == false) {
        reversed += " ";
        while(isEmpty(s) == false){
            reversed += pop(s)
        }
    }
    //console.log(reversed)
    return reversed
    }
    
    console.log(reversestring("i like cats"))