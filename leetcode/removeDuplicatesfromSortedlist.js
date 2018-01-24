function ListNode(val) {
    this.val = val;
    this.next = null;
  }
   
  var deleteDuplicates = function(head) {
    if (!head) {
      return head;
    }
    var temp = head;
    console.log(temp)
    var runner = head.next;
    console.log(runner)
    while (runner != null && runner.next != null) {
      if (temp.val == runner.val) {
        runner = runner.next;
        temp.next = runner;
      } else {
        temp = temp.next;
        runner = runner.next;
      }
    }
    
    return head;
  };
  
  var l1 = new ListNode(2);
  var l2 = new ListNode(2);
  var l3 = new ListNode(2);
  var l4 = new ListNode(3);
  l1.next = l2;
  l2.next = l3;
  l3.next = l4;
  
  console.log(deleteDuplicates(l1));


//   var deleteDuplicates = function(head) {
    
    
//     if(!head) {
//         return head
//     }
    
//     var temp = head; 
//     var runner = head;
    
//     while(runner != null && runner.next != null ) {
//         if(runner.next.val == runner.val){
//             runner.next = runner.next.next;
            
//         } else {
          
//             runner = runner.next
//         }
//     }
//     return head
    
    
// };
  

  
  