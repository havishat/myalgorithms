
  function listNode(value){
    this.val = value;
    this.next = null
  }
  
  var head = new listNode(10)
  head.next = new listNode(20) 
  //x->10->20->null
  // p.next.next = new listNode(2)
  // p.next.next.next = new listNode(2)
  
  var insertNodeToHead = function (head, val){
    // var runner = head;
    // var count = 0;
  
  
    if(!head){
      head = this.val
    } else {
      temp = head
      // n = this.val
      n = new listNode(val)
      n.next = temp;
      head = n;
      // head = runner.next;
    // while(runner.next){
    //   runner = runner.next;
    //   // count++;
    // } 
    // runner = this.val
    }
    return head
  }
  
  console.log(insertNodeToHead(head,2))
  console.log(insertNodeToHead(head,4))
  