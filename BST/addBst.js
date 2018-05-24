// Given an algorithm for finding the sum of all elements in binary tree.
// Recursively, call left subtree sum, rigth subtree sum and add their values to nodes data.
// Thime Complexity: O(n) Space Complexity O(n) 

function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

var p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(2);
// p.right.left = new TreeNode(3);
// p.left.left = new TreeNode(3);
// p.left.right = new TreeNode(10);

function Add(root){
    if(root == null){
        return 0
    } else {
        var y = (root.val + Add(root.left) + Add(root.right))
        return y
    }
}

console.log(Add(p))