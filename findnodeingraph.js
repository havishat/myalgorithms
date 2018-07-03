class Node(object):
    def __init__(self, val):
        self.val = val
        self.visited = False
        self.nei = []

class Graph(object):
    def __init__(self):
        self.nodes = []

    def findNode(self, val):
        for n in self.nodes:
            if not n.visited:
                res = self.checkNodeVal(n, val)
                if res:
                    return res
        return False

    def checkNodeVal(self, a, b):
        if a.visited:
            return False
        a.visited = True
        if a.val == b:
            return True
        for n in a.nei:
            if not n.visited:
                res = self.checkNodeVal(n, b)
                if res:
                    return res
        return False


#Boiler Plate Code
n1 = Node(1)
n2 = Node(2)
n3 = Node(3)
n4 = Node(4)
n5 = Node(5)
n6 = Node(6)
n7 = Node(7)
n8 = Node(8)
n9 = Node(9)
n10 = Node(10)
n11 = Node(11)
n12 = Node(12)
n13 = Node(13)
n14 = Node(14)
n1.nei = [n2,n3]
n3.nei = [n4,n5,n6]
n2.nei = [n6,n12]
n12.nei = [n8,n9,n10,n11]
n6.nei = [n7]
n13.nei = [n14]

g = Graph()
g.nodes = [n1,n13]
print g.findNode(9)