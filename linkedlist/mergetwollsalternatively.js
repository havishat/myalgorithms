

function listNode(value){
    this.val = value;
    this.next = null
  }
  
  var p = new listNode(10)
  p.next = new listNode(20)
  p.next.next = new listNode(2)
  p.next.next.next = new listNode(6)

  var k = new listNode(1)
  k.next = new listNode(2)
  k.next.next = new listNode(4)
  k.next.next.next = new listNode(5)
  
  var linkedlist = function (a,b){
    var runner1 = a;
    var runner2 = b;
  
    if(!a){
      return b
    } 
    if(!b){
      return a
    }
    temp = a
    while(runner1 && runner2){
      a1 = runner1.next;
      b1 = runner2.next;
			runner1.next = runner2;
			runner2.next = a1;
			runner1 = a1;
			runner2 = b1;
    }
    return temp
    // console.log(runner2)
    
  }

  // var printLinkedList = function(p,k) {
  //     var t = p
  //     while(t) {
  //         console.log(t.val)
  //         console.log("---")
  //         t = t.next
  //     }
  // }
  
  console.log(linkedlist(p,k))