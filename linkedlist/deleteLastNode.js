function linkListNode(value){
    this.val = value;
    this.next = null;
}

var head = new linkListNode(10)
head.next = new linkListNode(20) 
head.next.next = new linkListNode(1) 
head.next.next.next = new linkListNode(22)
// head.next.next.next.next = new linkListNode(3)
var deleteLastNode = function(){
    runner = head;
    while(runner.next){
        p1 = runner
        runner = runner.next;
    }
    p1.next = runner.next
    return head
}

console.log(deleteLastNode())