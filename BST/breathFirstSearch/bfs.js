function QueueNode(val){
    this.val = val;
    this.next = null;
  }
  
  function Queue(){
    this.head = null;
    this.tail = null;
  }
  
  var enqueue = function(q, val){
    newmember = new QueueNode(val);
    //If there are no members in the queue,
    //this will be the first member
    if (q.tail == null) {
      q.head = newmember;
      q.tail = newmember;
    } else {
      oldtail = q.tail;
      oldtail.next = newmember;
      q.tail = newmember;
    }
  }
  
  var dequeue = function(q){
    //If there are no members in the queue, nothing to dequeue
    if (q.head == null) {
      console.log("Nothing to dequeue")
      return null;
    }
    //if head and tail are same, only one member in queue
    //both of them will be null once we dequeue
    if (q.head == q.tail){
      remmember = q.head;
      q.head = null;
      q.tail = null;
      return remmember.val;
    } else {
      remmember = q.head;
      q.head = q.head.next;
      return remmember.val;
    }
  }
  
  var isEmpty = function(q) {
    if (q.head == null && q.tail == null) {
      return true;
    }
    return false;
  }
  
  var deleteQueue = function(q){
  
    if(q.head == null){
  
      return 
    } else {
      temp = q.head;
      while(temp != null){
  
        temp = temp.next
      }
      q.head = null
      q.tail = null
    }
    return q
  } 
  
  
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
  
  // BinarySearchTree.prototype.bsf = function(val){
  var bsf = function(root){
        var q = new Queue();  
       if(root == null){
          return;
       }
       enqueue(q,root)
      
        // console.log("hell")
       while(isEmpty(q) == false){
         
         var currentNode = dequeue(q)
         console.log(currentNode.val)
         if(currentNode.left != null){
           enqueue(q,currentNode.left)
         }
         if(currentNode.right != null){
           enqueue(q,currentNode.right)
         }
       }
      //  deleteQueue(q)
  }
  
  bsf(p)