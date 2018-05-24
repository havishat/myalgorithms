function TreeNode(val){
    this.val = val;
    this.right = this.left = null
}

var p = new TreeNode(1);
p.left = new TreeNode(0);
p.right = new TreeNode(2);
p.right.right = new TreeNode(3);
p.right.right = new TreeNode(5);

function bstSearchVal(root, val){
    if(root == null){
        return false 
    } else if(val<root.val){
            // if(!root.left){
            //     return false
            // }
          return bstSearchVal(root.left,val)
        } else if(val>root.val) {
            // if(!root.right){
            //     return false
            // }
            return bstSearchVal(root.right, val)
        } else if(val == root.val){
                return true 
        }
    return false 
    }

//     if (root === null) {
//         return false;
//     }
//     var runner = root;
//     while (runner) {
//         if (val === runner.val) {
//             return true;
//         }
//         if (val < runner.val) {
//             console.log(val)
//             if (!runner.left) {
//                 return false;
//             }
//             runner = runner.left;
//             // return runner
//         } else {
//             if (!runner.right) {
//                 return false;
//             }
//             runner = runner.right;
//             // return runner
//         }
//     }
//     return false;
// }


console.log(bstSearchVal(p,6))



