
# Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

# Example:

# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4


class Solution:
  def mergeTwoLists(self, l1, l2):
    if(not l1):
      return l2
    if(not l2):
      return l1
    
    if(l1.val < l2.val):
      l1.next = self.mergeTwoLists(l1.next,l2)
      return l1
    else:
      l2.next = self.mergeTwoLists(l1,l2.next)
      return l2


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        if(not l1):
            return l2
        if(not l2):
            return l1
        head = ListNode(0)
        prev = head
        while(l1 and l2): 
            if(l1.val < l2.val):
                prev.next = l1
                l1 = l1.next
            else:
                prev.next = l2
                l2 = l2.next
            prev = prev.next
        if (l2):
            prev.next = l2
        elif (l1) :
            prev.next = l1
        return head.next
