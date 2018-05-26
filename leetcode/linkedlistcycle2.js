
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
var detectCycle = function(head) {
    
    if (head == null || head.next == null) {
        return null;
    }
    let slow = head.next;
    let fast = head.next.next;
    
    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return null;
        }
      fast = fast.next.next;
      slow = slow.next;
    }
    
    let p3 = head;
    while(p3 != fast){
        p3 = p3.next;
        fast = fast.next
    }
    return p3
};



// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  *//**  * Definition for s 

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var detectCycle = function(head) {
//     if (!head) return null;
    
//     let slow = head;
//     let fast = head;
    
//     let cycle = false;
//     let nodes = [];
    
//     while (fast.next && fast.next.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//         if (slow === fast) {
//             cycle = true;
//             break;
//         } 
//     }
    
//     if (cycle) {
//         slow = head;
//         while (slow !== fast) {
//             slow = slow.next;
//             fast = fast.next;
//         }
//         return slow;
//     }
    
//     return null;
// };


// ample 68 ms submission
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var detectCycle = function(head) {
//     if (!head || !head.next) {
//         return null;
//     }

//     if (head == head.next) {
//         return head;
//     }

//     let slow = head;
//     let speedy = head;
//     var intersect = null;

//     while (speedy !== null && speedy.next !== null) {
//         slow = slow.next;
//         speedy = speedy.next.next;
//         if (speedy == slow) {
//             intersect = slow;
//             break;
//         }
//     }

//     if (!intersect) return null;

//     let start = head;
//     while (start != intersect) {
//         start = start.next;
//         intersect = intersect.next;
//     }

//     return start;
// };

// var detectCycle = function(head) {
    
  
 
//     let slow = head;
//     let fast = head;
//      var intersect = null;
    
//     while (fast != null && fast.next !=null ) {
    
//       fast = fast.next.next;
//       slow = slow.next;
//       if(slow == fast){
//           intersect = slow
//           break
//         }
//     }
    
//     if (!intersect) {
//         return null;
//     } 
    
//     let p3 = head;
//     while(p3 != slow){
//         p3 = p3.next;
//         slow = slow.next
//     }
//     return p3
// };