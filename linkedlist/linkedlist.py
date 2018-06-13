class Node(object):
  def __init__(self, val):
    self.val = val
    self.next = None
  
class LinkedList(object):
  def __init__(self):
    self.head = None

  def add(self, val):
    newnode = Node(val)
    newnode.next = self.head
    self.head = newnode
  
  def printLinkedList(self):
    temp = self.head
    print "LinkedList - "
    while temp is not None:
      print temp.val
      temp = temp.next


if __name__ == "__main__":
  print "welcome to python"
  list = LinkedList()
  list.printLinkedList()
  list.add(5)
  list.printLinkedList()
  list.add(6)
  list.printLinkedList()