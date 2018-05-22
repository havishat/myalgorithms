function listNode(value){
    this.val = value;
    this.next = null;
}

var p = new listNode(10);
p.next = new listNode(20);
p.next.next = new listNode(2);

var length = function(head){
    var runner = head;
    var count = 0;

    while(runner){
        count++;
        runner = runner.next;
    }
    return count
}

console.log(length(p))


