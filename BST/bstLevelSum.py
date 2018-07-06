class TreeNode:
    def __init__(self,val):
        self.val = val
        self.left = None
        self.right = None

class Tree:
    def __init__(self, root):
      self.root = root

def Sum(root,level):
  return LevelSum(root,level,0)
    
def LevelSum(root, level, c):
  if(root == None):
    return 0
  if(level == c):
    return root.val
  
  s1 = LevelSum(root.left,level,c+1)
  s2 = LevelSum(root.right,level,c+1)
  return s1 + s2
  


if __name__ == "__main__":
  n1 = TreeNode(10)
  n2 = TreeNode(8)
  n3 = TreeNode(15)
  n4 = TreeNode(20)
  n1.left = n2
  n1.right = n3
  n3.right = n4
  t = Tree(n1)
  print(Sum(n1,0))