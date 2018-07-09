class TreeNode:
  def __init__(self,val):
    self.val = val
    self.left = None
    self.right = None

class Tree:
  def __init__(self,root):
    self.root = root 
def MaxHeight(root):
  if(root == None):
    return 0

  LDept = MaxHeight(root.left)
  RDept = MaxHeight(root.right)

  if(LDept < RDept):
    return LDept + 1
  else:
    return RDept + 1 

if __name__ == "__main__":
    print ("welcome to python")
    n1 = TreeNode(1)
    n2 = TreeNode(2)
    n3 = TreeNode(3)
    n4 = TreeNode(4)
    n5 = TreeNode(5)
    n1.left = n2
    n1.right = n3
    n2.left = n4
    n2.right = n5
    t = Tree(n1)
    print(MaxHeight(n1))