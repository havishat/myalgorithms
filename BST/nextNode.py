class TreeNode:
  def __init__(self,val):
    self.val = val
    self.left = None
    self.right = None

class Tree:
  def __init__(self,root):
    self.root = root

def NextNode(root,val):
    q = Queue()
    print ("enqueuing root")
    q.enqueue(root)

    currentlevel = 1
    nextlevel = 0
    while(not q.isEmpty()):
        #print ("Queue Size", q.size())
        #print ("Size is", q.size())
        Temp = q.dequeue()
        print ("temp val", Temp.val)
        print ("currentlevel", currentlevel)
        currentlevel = currentlevel - 1
        print ("currentlevel after decrementing", currentlevel)
        if(Temp.val == val):
            if(currentlevel != 0):
                return q.dequeue().val
            else:
                return None
        if(Temp.left != None):
            q.enqueue(Temp.left)
            nextlevel += 1

        if(Temp.right != None):
            q.enqueue(Temp.right)
            nextlevel += 1

        #print(Temp.val)
        if(currentlevel == 0):
            currentlevel = nextlevel
            nextlevel = 0
        #print ("Size", q.size())
        #break


class QueueNode:
    def __init__(self, val):
        self.val = val
        self.next = None

class Queue:
    def __init__(self):
        self.head = None

        self.tail = None
        self.length = 0

    def enqueue(self, val):
        newmember = QueueNode(val)
        if (self.tail is None):
            print ("Adding new val")
            self.head = newmember
            self.tail = newmember
        else:
            oldtail = self.tail
            oldtail.next = newmember
            self.tail = newmember
        self.length = self.length + 1
        #self.printQueue()

    def dequeue(self):
        head = self.head
        tail = self.tail
        if (self.head is None):
            return None
        self.length = self.length - 1
        if (self.head == self.tail):
            remmember = self.head
            self.head = None
            self.tail = None
            return remmember.val
        else:
            remmember = self.head
            self.head = self.head.next
            return remmember.val

    def size(self):
        return self.length

    def isEmpty(self):
        if self.length == 0:
            return True
        return False
        # if(not self.head):
        #     self.length = 0
        #     return self.length
        # runner = self.head
        # print(runner.val)
        # while(runner is not None):
        #     self.length += 1
        #     runner = runner.next
        # return self.length

    def printQueue(self):
        r = self.head
        #print(r.val)
        while (r is not None):
            print(r.val)
            r = r.next

if __name__ == "__main__":
    print ("welcome to python")
    n1 = TreeNode(1)
    n2 = TreeNode(2)
    n3 = TreeNode(3)
    n4 = TreeNode(4)
    n5 = TreeNode(5)
    n6 = TreeNode(6)
    n7 = TreeNode(7)
    n8 = TreeNode(8)
    n1.left = n2
    n1.right = n3
    n2.left = n4
    n2.right = n5
    n3.left = n6
    n6.left = n7
    n6.right = n8
    # n3.right = n4
    t = Tree(n1)
    print (NextNode(n1,3))
    # q = Queue()
    # q.enqueue(1)
    # q.enqueue(2)
    # q.enqueue(3)
    # #print (q.dequeue())
    # q.printQueue()