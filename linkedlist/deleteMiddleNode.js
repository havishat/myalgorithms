function linkedListNode(value){
    this.val = value;
    this.next = null;
}

var head = new linkedListNode(10)
head.next = new linkedListNode(20) 
head.next.next = new linkedListNode(1) 
head.next.next.next = new linkedListNode(4) 

var deleteIntermediate = function(position){
    var count = 1;
    var runner = head;
    var p1
    while(count<position && runner.next){
        count++;
        p1 = runner;
        runner = runner.next
    }
    p1.next = runner.next;
    return head
}

console.log(deleteIntermediate(3))