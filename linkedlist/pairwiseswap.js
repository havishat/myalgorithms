function Node(val){
    this.val = val;
    this.next = null;
  }
  
  var p = new Node(3);
  p.next = new Node(2);
  p.next.next = new Node(4);
  p.next.next.next = new Node(5);
  p.next.next.next.next = new Node(7);
  
  var pairwiseSwap = function(head) {
    temp = head;
    while(temp != null && temp.next != null){
  
      temp2 = temp.val
      temp.val = temp.next.val
      temp.next.val = temp2
      temp = temp.next.next
  
     
    }
    return head
  }
  
  console.log(pairwiseSwap(p))
  
  // recursive
  // var pairwiseSwap = function(head) {
  //   temp = head;
  //   if(temp != null && temp.next != null){
  
  //     temp2 = temp.val
  //     temp.val = temp.next.val
  //     temp.next.val = temp2
  //     pairwiseSwap(temp.next.next)
  //   }
  //   return head
  // }
  
  // console.log(pairwiseSwap(p))
  