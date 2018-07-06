class TreeNode:
  def __init__(self,val):
    self.val = val
    self.left = None
    self.right = None

class Tree:
  def __init__(self,root):
    self.root = root

def PathSum(root,sum):
  if(root == None):
    return False
  if(root.left == None and root.right == None):
    return root.val == sum
  return (PathSum(root.left, sum - root.val) or PathSum(root.right,sum - root.val))




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
  print(PathSum(n1,18))