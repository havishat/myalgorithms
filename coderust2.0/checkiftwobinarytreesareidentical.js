function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var k;

var p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(2);
p.left.left = new TreeNode(3);
p.right.right = new TreeNode(3);
// p.right.right.right = new TreeNode(10);
// p.left.left.left = new TreeNode(4);

var n = new TreeNode(1);
n.left = new TreeNode(2);
n.right = new TreeNode(2);
n.left.left = new TreeNode(3);
n.right.right = new TreeNode(3);
// n.right.right.right = new TreeNode(10);
// n.left.left.left = new TreeNode(4);
// p.right.left.right = new TreeNode(4);
// p.right.left.right.left = new TreeNode(5);
// p.right.left.right.left.left = new TreeNode();
// p.right.left.right.left.right = new TreeNode(6);
// p.right.left.right.left.right.left = new TreeNode(7);


// arr = [-99,-98,-97,-96,-94,-93,-91,-90,-88,-87,-86,-85,-83,-81,-80,-79,-78,-76,-73,-72,-70,-69,-66,-65,-64,-63,-61,-59,-57,-56,-55,-54,-53,-52,-51,-48,-45,-44,-43,-42,-41,-40,-39,-37,-34,-33,-32,-31,-30,-28,-26,-24,-22,-20,-19,-18,-16,-15,-14,-12,-10,-9,-8,-6,-5,-4,-3,-2,-1,0,1,2,5,7,8,9,10,11,15,16,17,19,20,21,23,24,26,27,28,30,33,35,36,38,49,50,51,52,54,55,56,57,58,59,60,61,64,65,67,69,70,71,72,73,74,77,79,81,82,85,86,87,88,90,91,94,95,96,97,99];
// arr2 = [];

let are_identical = function(root1, root2) {
    if(!root1 && !root2) {
        return true
    }
    if(root1 && root2){
        return (root1.val === root2.val && are_identical(root1.left, root2.left) && are_identical(root1.right, root2.right));

    }
    return false
}

console.log(are_identical(p, n))