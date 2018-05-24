function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}
// function BST(){
//     this.root = null;
// }

var p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);
p.right.right = new TreeNode(5);
// p.left.left = new TreeNode(3);
// p.left.right = new TreeNode(10);

var BST = function(val, root){
    if(root == null){
        root = new TreeNode(val);
    } else {
        if(val < root.val){
            if(root.left){
                BST(val,root.left)
            } else {
                root.left  = new TreeNode(val);
            }
        } else {
            if(root.right){
                BST(val,root.right)
            } else {
                root.right = new TreeNode(val)
            }
        }
    }
    return root
}

console.log(BST(p))

