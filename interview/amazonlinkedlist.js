function Node(val){
    this.val = val;
    this.next = null;
}

p = new Node(3);
// p.next = new Node(3);

function LL(head,val){
    var node = new Node(val)
    if(!head){
       head = node;
    } 
    temp = head;
    runner = node;
    // while(runner.next){
    //     runner = runner.next
    // }
    runner.next = temp;
    return runner;
}

console.log(LL(p,10))