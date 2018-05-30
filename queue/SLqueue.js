function QueueNode(val){
    this.val = val;
    this.next = null;
  }
  
  function Queue(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  Queue.prototype.enqueue = function(q, val){
    var head = this.head;
    var tail = this.tail;
  
    newmember = new QueueNode(val);
    //If there are no members in the queue,
    //this will be the first member
    if (q.tail == null) {
      q.head = newmember;
      q.tail = newmember;
    } else {
      oldtail = q.tail;
      oldtail.next = newmember;
      q.tail = newmember;
    }
     console.log(`${val} has been added to the queue`);
  }
  
  Queue.prototype.dequeue = function(q){
    var head = this.head;
    var tail = this.tail;
    //If there are no members in the queue, nothing to dequeue
    if (q.head == null) {
      console.log("Nothing to dequeue")
      return null;
    }
    //if head and tail are same, only one member in queue
    //both of them will be null once we dequeue
    if (q.head == q.tail){
      remmember = q.head;
      q.head = null;
      q.tail = null;
      return remmember.val;
    } else {
      remmember = q.head;
      q.head = q.head.next;
      return remmember.val;
    }
  }
  
  Queue.prototype.size = function(s){
    if(!this.head) {
      this.length = 0
      return this.length
    } 
    var runner = this.head
    while(runner){
      this.length++
      runner = runner.next
    }
    return this.length
  }
  
  q = new Queue()
  q.dequeue(q)
  // console.log(q)
  q.enqueue(q, 1)
  console.log(q)
  q.enqueue(q, 2)
  console.log(q)
  // q.dequeue(q)
  console.log(q)
  q.size()
  console.log(q)
  // q.enqueue(q, 3)
  // console.log(q)
  // q.enqueue(q, 4)
  // console.log(q)
  // q.dequeue(q)
  // console.log(q)
  // q.enqueue(q, 5)
  // console.log(q)