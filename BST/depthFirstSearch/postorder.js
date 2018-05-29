function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
  
  // function BinarySearchTree(){
  //   this.root = null;
  // }

var p = new TreeNode(1);
p.left = new TreeNode(2);

p.right = new TreeNode(3);
p.left.left = new TreeNode(4);
p.left.right = new TreeNode(5);
p.right.left = new TreeNode(6);
p.right.right = new TreeNode(7);

var postorder = function(root){
    if(root == null){
      return
    } else {
      postorder(root.left)
      postorder(root.right)
      // console.log(root.val)
    }
}
  
postorder(p)