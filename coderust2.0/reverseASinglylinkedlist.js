function listNode(val){
    this.val = val;
    this.next = null;
  }
  
    var head = new listNode(0)
    head.next = new listNode(1) 
    head.next.next = new listNode(2) 
    //head.next.next.next = new listNode(3) 
  
  
  let reverse_iterative = function(head) {
      //  no need to reverse if head is null 
      //  or there is only 1 node.
      if (!head || !head.next) {
          return head;
      }
  
      r = head;
      c = head.next;
  
      while(c){
        let temp = c;
        c = c.next;
        temp.next = r;
        r = temp
      }
      return r
  
  };
  
  console.log(reverse_iterative(head));