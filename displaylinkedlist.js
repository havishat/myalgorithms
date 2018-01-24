function display(list){
    var runner = list.head;
    var elel = "" + runner.val;
    while(runner.next){
        runner = runner.next;
        elel += ", " + runner.val;
    }
}

console.log(display(linkedlist))

// Tdiagram 
// mySLL = newSLL()
//mySLL.head = new Node(4);
//mysll.head.next = new node(8);
//mySLL.head.next.next = new node(12);
//display(mysll);

// var  | value
// runner | 4
// ele | "4" 
//runner | 8 
//ele | "4, 8"
//runer | 12
//ele | "4,8,12" 