

function listNode(value){
    this.val = value;
    this.next = null
  }
  
  var p = new listNode(10)
  p.next = new listNode(20)
  p.next.next = new listNode(2)
  p.next.next.next = new listNode(6)
  
  var linkedlist = function (head){
    // var runner = head;
    // var count = 0;
  
    if(!head){
      head = this.val
    } else {
      runner = head;
    while(runner.next){
      runner = runner.next;
      // count++;
    } 
    runner.next = this.val
    }
    return head
  }

  var printLinkedList = function(head) {
      var t = head
      while(t) {
          console.log(t.val)
          console.log("---")
          t = t.next
      }
  }
  
  console.log(linkedlist(p))
//   console.log(printLinkedList(p))