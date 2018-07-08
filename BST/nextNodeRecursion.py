class TreeNode:
    def __init__(self,val):
        self.val = val
        self.left = None
        self.right = None

class Tree:
    def __init__(self,root):
        self.root = root

class Result:
    def __init__(self, level):
        self.level = level
        self.node = None

def NextNode(root, val):
    return findNextNode(root, val, 1, None)

def findNextNode(root, val, currentlevel, result):
    print ("here for ", val, " in ", currentlevel)
    if not root:
        return result
    if result is not None: #This means the original node is found
        print ("searching for next node")
        if currentlevel == result.level:
            result.node = root
            return result
    else: #This means search for the originalNode first
        if root.val == val:
            print ("Found val")
            r = Result(currentlevel)
            return r
    resultLeft = findNextNode(root.left, val, currentlevel+1, result)
    if resultLeft and resultLeft.node:
            return resultLeft
    return findNextNode(root.right, val, currentlevel+1, resultLeft)

if __name__ == "__main__":
    """
        1
      2    3
    4  5  6
         7 8
    """
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
    n = NextNode(n1, 3)
    if n and n.node:
        print ("inorder next node", n.node.val)
    else:
        print ("No in order successor")
