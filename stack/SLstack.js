function StackNode(val){
    this.val = val;
    this.next = null;
  }
  
  function Stack(){
    this.top = null;
    this.length = 0;
  }
  
  Stack.prototype.push = function(s, val){
    var top = this.top;
    var newmember = new StackNode(val);
    if(!top){
      s.top = newmember
  
    } else {
        newmember.next = s.top;
        s.top = newmember;
  
    }
    console.log(`${val} has been added to the stack`);
    return s.top
  }
  
  Stack.prototype.pop = function(s){
    var top = this.top;
    if(!top){
      console.log("Nothing to stack")
      return null
    } else {
      temp = s.top;
      s.top = s.top.next;
      return temp
    } 
  }
  
  Stack.prototype.front = function(s) {
    var top = this.top
    if(!top){
      console.log("Nothing to stack")
      return null
    } else {
      return this.top.val
    }
  }
  
  Stack.prototype.isEmpty = function(s) {
    var top = this.top
    if(!top){
      console.log("Nothing in stack")
      return true
    } else {
      console.log("Stack is not Empty")
      return false
    }
  }
  
  Stack.prototype.size = function(){
      var runner = this.top;
      while (runner) {
          this.length++;
          runner = runner.next;
      }
      return this.length;
  }
  
  Stack.prototype.contains = function(val){
    // console.log("hello")
    var runner = this.top;
    while(runner){
      //  console.log("hello")
      if(runner.val == val){
         console.log("hello")
        return true
      } 
        runner = runner.next
    }
    return false
  }
  
  
  
  stack = new Stack()
  stack.isEmpty()
  stack.pop(stack)
  // console.log(stack)
  stack.push(stack, 1)
  // console.log(stack)
  stack.push(stack, 2)
  // console.log(stack)
  stack.push(stack, 3)
  // console.log(stack)
  stack.push(stack, 4)
  stack.front(stack)
  stack.isEmpty()
  stack.size()
  console.log(stack)
  stack.contains(2)