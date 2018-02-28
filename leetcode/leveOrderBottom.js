// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
   }
   
 var val = new TreeNode(1);
 val.left = new TreeNode(2);
 val.right = new TreeNode(3);
 // val.right.left = new TreeNode(15);
 val.left.left = new TreeNode(4);
 val.right.right = new TreeNode(5);
 
 
 
 var levelOrderBottom = function(root,arr=[[]],count=0) {
     if(!root){
       return;
     } else {
       arr[count] = [root.val];
       helperlevelorderbottom(root,arr,count);
       arr.reverse()
       return arr
     }
 };
 
 var helperlevelorderbottom = function(root,arr,count){
     if(!root){
       return; 
     } else {
       count++
       if(root.left && !root.right){
         helperlevelorderbottom(root.left,arr,count);
         if(arr[count]){
           arr[count].push(root.left);
         }else {
           arr[count] = [root.left.val];
         }
       }
       if(!root.left && root.right){
         helperlevelorderbottom(root.right,arr,count);
         if(arr[count]){
           arr[count].push(root.right);
         }else {
           arr[count] = [root.right.val];
         }
       }
       if(root.left && root.right){
         helperlevelorderbottom(root.left,arr,count);
         helperlevelorderbottom(root.right,arr,count);
         if(arr[count]){
           arr[count].push(root.left, root.right);
         }else {
           arr[count] = [root.left.val, root.right.val];
         }
       }
      //  count--
       return arr
     }
     
 }
 
 console.log(levelOrderBottom(val))