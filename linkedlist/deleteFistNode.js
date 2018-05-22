function linkedListNode(value){
    this.val = value;
    this.next = null;
}

var head = new linkedListNode(10)
head.next = new linkedListNode(20) 
head.next.next = new linkedListNode(1) 

var deleteFirstNode = function(){
    if(!head){
        return
    } else {
        temp = head;
        head = head.next 
    }
    return head
}

console.log(deleteFirstNode())