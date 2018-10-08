// Medium: Given a binary tree, return all root-to-leaf paths. For example, given the following binary tree:z
  ```1
 /   \
2     3
 \
  5
All root-to-leaf paths are: ["1->2->5", "1->3"]```


function TreeNode(val){

    this.val = val;

    this.left = this.right = null;

}
var p = new TreeNode(1);

p.left = new TreeNode(2);

p.right = new TreeNode(3);

//p.left.left = new TreeNode(4);

p.left.right = new TreeNode(5);


var binaryTreePaths = function(root) {
    var paths = [];
    if(!root) return [];
    if(root.left == null && root.right == null){
        if(paths.length == 0) return [""+root.val];
        else return root.val;
    } 
    else{
        if(root.left) 
          console.log('this is root.left', root.left);
          binaryTreePaths(root.left).forEach(function(lp) {
            console.log('this is root.val', root.val);
            console.log('this is lp', lp);
            paths.push(root.val + "->" + lp);
            console.log('paths:', paths);
          });
        if(root.right) 
          binaryTreePaths(root.right).forEach(function(rp) {
            console.log('this is rp', rp);
            paths.push(root.val + "->" + rp);
          });
    }

    return paths;
};

// binaryTreePaths(p)

var paths = function(root) {
  if(root === null){
    return [];
  }
  var answer = [];
  // var temp = [];

  function pathsHelper(root){
    var temp = [...temp, root.val];
    if(root.left === null && root.right === null){
      answer.push(temp);
    }
    else {
      if(root.left !== null){
        pathsHelper(root.left, temp);
      }
      if(root.right !== null){
        pathsHelper(root.right, temp);
      }
    }

  }
  pathsHelper(root, []);
  return answer;
}

paths(p);

