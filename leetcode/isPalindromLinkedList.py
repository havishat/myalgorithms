class ListNode:
    def __init__(self, x):
      self.val = x
      self.next = None

head =  ListNode(10)
head.next = ListNode(20) 
head.next.next = ListNode(30)

class Solution:
    def __init__(self):
      self.head = None
    def isPalindrome(self, head):
      p = head
      q = head
      
      while(1):
        p = p.next.next
        if(p.next == None):
          start_second = q.next.next
          break
        if(p == None):
          start_second = q.next
          break
        q = q.next
        
      q.next = None 

      runner = start_second
      prev = None

      while(runner):
        temp = runner.next
        runner.next = prev
        prev = runner
        runner = temp
      start_second = prev

      #compare start_second and head
      cur1 = start_second
      cur2 = head
      while cur1:
        if cur1.val != cur2.val:
          return False
        cur1 = cur1.next
        cur2 = cur2.next
      return True

    def printLinkedList(self, head):
      temp = self.head
      while(temp):
        print(temp.val)
        temp = temp.next

if __name__ == "__main__":
  print("welcome to python")
  obj= Solution()
  print(obj.isPalindrome(head))
  obj.printLinkedList(head)