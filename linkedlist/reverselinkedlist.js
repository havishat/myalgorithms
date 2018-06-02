
function listNode(val){
  this.val = val;
  this.next = null;
}

  var head = new listNode(10)
  head.next = new listNode(20) 
  head.next.next = new listNode(30) 

function reverseList (head){
  if((!head) || (!head.next)){
    return head
  } 
  var runner = head;
  var prev = null
  while(runner){
    var temp = runner.next;
    runner.next = prev;
    prev = runner
    runner = temp;


  }
  return prev
}

  console.log(reverseList (head))
  // console.log(reverseList (head))

// time complexity o(N) and space complexity o(n)

// function reverseList(){
//   if(head == null) {
//     return 
//   }
//   var stack = []
//   temp = head;
//   while(temp != null){
//     stack.push(temp);
//     temp = temp.next;
//   }
//   temp = stack.top();
//   // temp = stack[stack.length-1]
//   head = temp;
//   stack.pop();

//   while(!stack.empty()){
//     temp.next = stack.top();
//     stack.pop();
//     temp = temp.next;
//   }
//   temp.next = null
// }