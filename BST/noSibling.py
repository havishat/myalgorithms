class TreeNode:
  def __init__(self,val):
    self.val = val
    self.right = None
    self.left = None

class Tree:
  def __init__(self,root):
    self.root = root

def NoSibling(root):
  if(root == None):
    return 
  if(root.left == None and root.right != None):
    print(root.right.val)
  if(root.left != None and root.right == None):
    print(root.left.val)
  
  NoSibling(root.left)
  NoSibling(root.right)

if __name__ == "__main__":
  n1 = TreeNode(10)
  n2 = TreeNode(8)
  n3 = TreeNode(15)
  n4 = TreeNode(20)
  n5 = TreeNode(25)
  n1.left = n2
  n1.right = n3
  n3.right = n4
  n4.right = n5
  t = Tree(n1)
  NoSibling(n1)