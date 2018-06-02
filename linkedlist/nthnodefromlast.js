// Write a function to get Nth node from last in a Linked List

function Node(val){
  this.val = val;
  this.next = null;
}

var p = new Node(2);
p.next = new Node(3);
p.next.next = new Node(4);
p.next.next.next = new Node(5);
p.next.next.next.next = new Node(7);

function nthNode(head, n){
  var runner = head;
  var len = 0;
  while(runner){
    runner = runner.next;
    len++;
  }

  if(len < n){
    return 
  }
  runner = head;
  for(var i =0 ; i<len-n+1; i++){
    runner = runner.next;
  }
  return runner.val
}

console.log(nthNode(p, 2))