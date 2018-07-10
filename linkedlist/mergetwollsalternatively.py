class listNode:
  def __init__(self,val):
    self.val = val
    self.next = None

l1 =  listNode(10)
l1.next = listNode(20) 
l1.next.next = listNode(30) 

l2 =  listNode(10)
l2.next = listNode(20) 
l2.next.next = listNode(30) 

class LinkedList:
  def __init__(self):
    self.head = None

  def mergetwoLLs(self, head1, head2):
    if((not head1)):
      return head2
    
    if((not head2)):
      return head1

    runner = head1
    runner2 = head2
    while(runner and runner2):
      temp1 = runner.next
      temp2 = runner2.next
      runner.next = runner2
      runner2.next = temp1
      runner = temp1
      runner2 = temp2
    return head1

  def printList(self):
    temp = self.head
    while temp != None:
        print(temp.val)
        temp = temp.next

if __name__ == "__main__":
  print("welcome to python")
  list = LinkedList()
  list.mergetwoLLs(l1,l2)