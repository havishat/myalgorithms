// Write a program to find the node at which the intersection of two singly linked lists begins.


// For example, the following two linked lists:

// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗            
// B:     b1 → b2 → b3
// begin to intersect at node c1.


// Notes:

// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.
// Credits:
// Special thanks to @stellari for adding this problem and creating all test cases.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  
    // if(!headB){
    //   return "No intersection"
    // }
  
    count1 = 0; count2 = 0; r1 = headA; r2 = headB;
     if(!r1 || !r2){
      return null
    }
    while(r1){
        count1++
      r1 = r1.next;
      
    }
    while(r2){
        count2++
        r2 = r2.next;
      
    }
      
    r1 = headA
    r2 = headB
      // diff = 0
    // y = Math.abs(count1 - count2)
    if(count1>count2){
       diff = count1 - count2
       
      while(diff != 0){
        r1 = r1.next
        diff = diff - 1
      }
    } else{
        diff = count2 - count1
  
      while( diff !=0){
        r2= r2.next
        diff = diff -1
      }
    }
    
    while(r1 && r2){
      if(r1.val == r2.val){
        return r1
      } else {
        
      }
        r1 = r1.next
        r2 = r2.next
    }
    return  null
  
      
  };