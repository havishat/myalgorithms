function linkedNode(value){
    this.val = value;
    this.next = null;
}

var head = new linkedNode(10)
head.next = new linkedNode(20) 

var insertionMiddle = function(head, val, position){
    var count = 1;
    var node;
    if(!position){
        return
    } else {
        runner = head;
        while(count<position && runner){
            count ++;
            node = runner;
            runner = runner.next;
        }
        node.next = new linkedNode(val);
        node.next.next = runner;
    }
    return head
}

console.log(insertionMiddle(head,4,2))
// console.log(insertionMiddle(head,6,4))
// console.log(insertionMiddle(head,7,2))

var printLinkedList = function(head) {
    var t = head
    while(t) {
        console.log(t.val)
        console.log("---")
        t = t.next
    }
}

console.log(printLinkedList(head))