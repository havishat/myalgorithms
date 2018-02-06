// Reverse a singly linked list.

// click to show more hints.

// Hint:
// A linked list can be reversed either iteratively or recursively. Could you implement both?



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
      return head;
    }
    
    var prev = null;
    var current = head
    var temp
    while(current != null) {
  
        temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
      
    }
    return prev
};