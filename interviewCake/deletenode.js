function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

// function deleteNode(node) {
//   node.value = node.next.value;
//   node.next = node.next.next;
// }

// Delete a node from a singly-linked list, ↴ given only a variable pointing to that node.


function deleteNode(nodeToDelete) {

    // get the input node's next node, the one we want to skip to
    var nextNode = nodeToDelete.next;

    if (nextNode) {

        // replace the input node's value and pointer with the next
        // node's value and pointer. the previous node now effectively
        // skips over the input node
        nodeToDelete.value = nextNode.value;
        nodeToDelete.next  = nextNode.next;
        // console.log(nodeToDelete)

    } else {

        // eep, we're trying to delete the last node!
        throw new Error("Can't delete the last node with this technique!");
    }
    return nodeToDelete
}

var a = new LinkedListNode(3);
var b = new LinkedListNode(8);
var c = new LinkedListNode(2);

a.next = b;
b.next = c;

console.log(deleteNode(b));