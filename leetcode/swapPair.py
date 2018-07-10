# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        runner = head
        while(runner != None and runner.next != None):
            runner2 = runner.val
            runner.val = runner.next.val
            runner.next.val = runner2
            runner = runner.next.next
        return head