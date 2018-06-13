 
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

  def insertbefore(self, val):
    newnode = Node(val)
    if self.head == None:
      self.head = newnode
      self.tail = newnode
    else:
      temp = self.head
      n = newnode
      n.next = temp
      n.prev = None
      self.head = n
      temp.prev = n

  def insertafter(self, val):
    newnode = Node(val)
    # self.tail = self.head 
    # newnode.next = None
    if self.head == None:
      newnode.prev = None
      self.head = newnode
      return
    while(self.tail.next != None):
        self.tail = self.tail.next
    self.tail.next = newnode
    newnode.prev = self.tail
  
  def insertmiddle(self, val, position):
    newnode = Node(val)
    runner = self.head
    count = 1
    while(runner != Node and count < position):
      node = runner
      runner = runner.next
      count = count + 1
    node.next = newnode
    node.next.next = runner.next
    newnode.prev = node
    newnode.next.prev = newnode
    # newnode.next = newnode 

    
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
  # list.printLinkedList()
  list.add(5)
  # list.printLinkedList()
  list.add(6)
  # list.printLinkedList()
  list.add(7)
  # list.printLinkedList()
  list.insertbefore(8)
  # list.printLinkedList()
  list.insertafter(10)
  # list.printLinkedList()
  list.insertmiddle(22,3)
  list.printLinkedList()