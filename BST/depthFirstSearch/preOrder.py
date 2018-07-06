class TreeNode:
    def __init__(self,val):
        self.val = val
        self.left = None
        self.right = None

class Tree:
    def __init__(self,root):
        self.root = root
    
    def printTree(self):
        PrintPreOrder(self.root)

def PrintPreOrder(node):
    if node == None:
        return
    
    print(node.val)
    PrintPreOrder(node.left)
    PrintPreOrder(node.right)

if __name__ == "__main__":
  n1 = TreeNode(10)
  n2 = TreeNode(8)
  n3 = TreeNode(15)
  n4 = TreeNode(20)
  n1.left = n2
  n1.right = n3
  n3.right = n4
  t = Tree(n1)
  t.printTree()