// 19 Remove Nth Node From End of List
// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.

function Node(val){
    this.val = val;
    this.next = null;
  }
  
  var p = new Node(2);
  p.next = new Node(3);
  p.next.next = new Node(4);
  // p.next.next.next = new Node(5);
  // p.next.next.next.next = new Node(7);

var removeNthFromEnd = function(head, n) {
   var dummy = new Node(0);
    dummy.next = head;
    var first = dummy;
    var second = dummy;
    // Advances first pointer so that the gap between first and second is n nodes apart
    for (var i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    // Move first to the end, maintaining the gap
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
}

console.log(removeNthFromEnd(p, 1))