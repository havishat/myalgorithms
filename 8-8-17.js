function SLL(){
  this.head = null;
}

function Node(val){
  this.val = val;
  this.next = null;
}

var mySLL = new SLL();
mySLL.head = new Node(5);
mySLL.head.next = new Node(7);
mySLL.head.next.next = new Node(8);

// console.log(mySLL.head.next);

function cleanString(list){
    var runner = list.head;
    // console.log(runner.val);
    var list1 = ("")  ;
    list1 += runner.val;
    // conslist1.append(runner.val);
    // console.log(list);
    while (runner.next){
        runner = runner.next;
        list1 += ", " + runner.val;
        // console.log(runner.val);
    }
     console.log(list1);
}
 
cleanString(mySLL)

function endAppend(list,val){
    var runner = list.head;
    while(runner.next){
        runner = runner.next;
    }
    runner.next = new Node(9);
    cleanString(list)
}

endAppend(mySLL,9)

function preappend(list,val){
    var runner2 = new Node(val);
    runner2.next = list.head;
    list.head = runner2;
    cleanString(list);
    // console.log(list);
}

preappend(mySLL,11)

