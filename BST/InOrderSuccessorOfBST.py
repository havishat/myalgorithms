# InOrder successor of a binary tree

class TreeNode:
  def __init__(self,val):
    self.val = val
    self.left = None
    self.right = None

class Tree:
  def __init__(self,root):
    self.root = root

def InOrderSuccessor(root, arr):
  if root == None:
    return arr
  arr = InOrderSuccessor(root.left,arr)
  arr.append(root.val)
  arr = InOrderSuccessor(root.right,arr)
  return arr

def CreatInOrder(root,val):
  arr = []
  array = InOrderSuccessor(root, arr)
  print (array)
  #for i in range(10):
  for i in range(len(array)):
    if(i == len(array)-1):
      return None
    elif(array[i] == val):
      return array[i+1]


if __name__ == "__main__":
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
  n3.right = n6
  n6.left = n7
  n6.right = n8
  # n3.right = n4
  t = Tree(n1)
  print (CreatInOrder(n1, 3))