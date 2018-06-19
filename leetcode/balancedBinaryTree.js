// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// Return false.


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}



var p = new TreeNode(3);
p.left = new TreeNode(9);
p.right = new TreeNode(20);
p.right.left = new TreeNode(15);
p.right.right = new TreeNode(7);



var isBalanced = function(root) {
    if ( isTreeBalanced(root) == -1){
        return false
    }
        return true
};

var isTreeBalanced = function(root){
    if(root == null){
        return 0
    }
    
    var leftHeight = isTreeBalanced(root.left)
   
    //  console.log(leftHeight)

    if(leftHeight == -1){
        return -1
    } 
    
     var rightHeight = isTreeBalanced(root.right)
   
    // console.log(rightHeight)
    if(rightHeight == -1){
        return -1
    }
    //  console.log(Math.abs(leftHeight - rightHeight))
    
    if(Math.abs(leftHeight - rightHeight) > 1){
        return -1
    }
    
    return 1 + Math.max(leftHeight, rightHeight)
}

isBalanced(p)