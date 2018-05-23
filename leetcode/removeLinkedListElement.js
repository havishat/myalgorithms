function ListNode(value) {
    this.val = value;
    this.next = null;
}

var head = new ListNode(1)
head.next = new ListNode(2) 
head.next.next = new ListNode(3) 
// head.next.next.next = new ListNode(3) 

var removeElements = function(head, val) {
    
    var runner = head;
    if(!head) {
        return null
    }
    while(runner.next){
      if(val == runner.next.val){
            runner.next = runner.next.next
        } else {
          runner = runner.next
        }
    }
    if(head.val == val) {
      return head.next 
    } else {
      return head
    }
    
};

console.log(removeElements(head,3))

// var removeElements = function(head, val) {
//     if (head == null){
//         return null;
//     }
//     while (head != null && head.val == val){
//         head = head.next;
//     }
//     var current = head;
//     while (current != null){
//         if (current.next != null && current.next.val == val){
//             current.next = current.next.next;
//         }
//         else{
//             current = current.next;
//         }
//     }
//     return head;
// };