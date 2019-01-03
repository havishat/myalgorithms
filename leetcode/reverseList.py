# o
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if ( not head):
            return head
        runner = head
        prev = None
        temp = 0
        while(runner != None):
            temp = runner.next
            runner.next = prev
            prev = runner
            runner = temp
        return prev