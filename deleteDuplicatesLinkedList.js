/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let newNode = null;
    let current = head;
    let previous = null;
    
    while(head != null){
     
    console.log(head.next.val)
    if(current.val != head.next.val){
        current = head;
        head = head.next
    }
        
    if(newNode == null){
        newNode = current; 
    }

      if(previous != null){
         previous.next = current;
      } 
      
     
         previous = current;
        
       
    }
    
    return newNode;
};
