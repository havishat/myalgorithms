// 232. Implement Queue using Stacks
// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.
// Notes:
// You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).


/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = []; // come in
    this.stack2 = []; // for go out
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
//      var len = this.stack2.length,
//         i;
    
//     for (i = 0; i < len; i++) {
//         this.stack1.push(this.stack2.pop());
//     }
    
//     this.stack1.push(x);
    
//     for (i = 0; i < len + 1; i++) {
//         this.stack2.push(this.stack1.pop());
//     }
    this.stack1.push(x);
};



/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // this.stack2.pop();
    return this.stack1.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
//     var x = this.stack2.pop();
    
//     this.stack2.push(x)
//     return x;
    return this.stack1[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
     var len = this.stack2.length;
        
//     if (len === 0) {
//         return true;
//     }
    
//     return false;
    return this.stack1.length == 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */