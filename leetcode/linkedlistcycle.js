// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    if (head == null || head.next == null) {
        return false;
    }
    
    var slow = head;
    var fast = head.next;
    
    while(slow != fast){
         if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next
        fast = fast.next.next
    }
    
    return true
    
};


// var hasCycle = function(head) {
//     let slow = head;
//     let fast = head;
    
//     while (fast && fast.next) {
//       fast = fast.next.next;
//       slow = slow.next;
      
//       if (fast === slow) {
//         return true;
//       }
//     }
    
//     return false;
//   };