 
class Node(object):
  def __init__(self, val):
    self.val = val
    self.next = None
    self.prev = None

class LinkedList(object):
  def __init__(self):
    self.head = None
    self.tail = None

  def add(self, val):
    newnode = Node(val)
    if self.head == None:
      self.head = newnode
      self.tail = newnode
    else :
      newnode.prev = self.tail
      self.tail.next = newnode
      self.tail = newnode
      
  # def printLinkedList(self):
  #   string = ''
  #   temp = self.head
  #   print "LinkedList - "
  #   while temp is not None:
  #     # print temp.val
  #     string += str(temp.val) + ' '
  #     temp = temp.next
  #   print string

  def printLinkedList(self):
    temp = self.head
    last = None
    print "LinkedList - "
    while temp is not None:
      print "%d next" %(temp.val),
      last = temp
      temp = temp.next
    
    print " "

    while(last is not None):
      print "%d prev" %(last.val),
      last = last.prev
    
if __name__ == "__main__":
  print "welcome to python"
  list = LinkedList()
  list.printLinkedList()
  list.add(5)
  list.printLinkedList()
  list.add(6)
  list.printLinkedList()
  list.add(7)
  list.printLinkedList()