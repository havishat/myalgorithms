
function listNode(value){
    this.val = value;
    this.next = null
  }

    
  var head = new listNode(10)
  head.next = new listNode(20) 
  
  var insertNodeToTail = function (head, val){
    // var runner = head;
    // var count = 0;
  
  
    if(!head){
      head = new listNode(val)
    } else {
      var runner = head
      while(runner.next){
    
      runner = runner.next;
      }
  
        // temp = null
      n = new listNode(val)
      // 10->20->4
      // n.next = temp;
      runner.next = n
  
      // head = runner.next;
    // while(runner.next){
    //   runner = runner.next;
    //   // count++;
    // } 
    // runner = this.val
    }
    return head
  }
  
  console.log(insertNodeToTail(head,4))
//   console.log(insertNodeToTail(head,5))
//   console.log(insertNodeToTail(head,45))