// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:
//     2
//    / \
//   1   3
// Binary tree [2,1,3], return true.
// Example 2:
//     1
//    / \
//   2   3
// Binary tree [1,2,3], return false.

var isValidBST = function(root) {
    return isValidBSTHelper(root, null, null);
};
  
var isValidBSTHelper = function(root, min, max) {
if(root == true){
    return true
}
if((min != null && root.val<=min) || (max!= null && root.val >= max)){
    return false
}

return isValidBSTHelper(root.left, min, root.val) && isValidBSTHelper(root.right, root.val, max);

};
  

// VALID BST     
    //  -- Left Subtree must be BST
    //  -- Right Subtree must be BST
    //  -- leftnode <= root <= rightnode

    //  IsValidBST(node n) { //8, 5, 3
    //  	if n == null {
    //  		return True
    //  	}
    //  	-- Left Subtree must be BST
    //  	isLeftBST = isValidBST(n.left)
    //  	if !isLeftBST {
    //  		return False
    //  	}
    //  	-- Right Subtree must be BST
    //  	isRightBST = isValidBST(n.right)
    //  	if !isRightBST {
    //  		return False
    //  	}
    //  	if (n.left && n.left.val > n.val) {
    //  		return False
    //  	}
    //  	if(n.right && n.val > n.right.val) {
    //  		return False
    //  	}
    //  	return True
    //  }