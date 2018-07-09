class listNode:
  def __init__(self,val):
    self.val = val
    self.next = None

head =  listNode(10)
head.next = listNode(20) 
head.next.next = listNode(30) 



class LinkedList:
  def __init__(self):
    self.head = None

  def reverselist(self, head):
    if((not head) or (not head.next)):
      return head
    
    runner = head
    prev = None

    while(runner):
      temp = runner.next
      runner.next = prev
      prev = runner
      runner = temp
    self.head = prev

  def printLinkedList(self):
    temp = self.head
    while(temp):
      print(temp.val)
      temp = temp.next

if __name__ == "__main__":
  print("welcome to python")
  list = LinkedList()
  print(list.reverselist(head))
  list.printLinkedList()