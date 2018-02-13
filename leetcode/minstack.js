
// 155. Min Stack

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.


/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = []
    this.arr = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
     var len = this.min.length;
    if (this.arr.length === 0) {
        this.min.push(x);
    } else if (this.min[len - 1] >= x) {
        this.min.push(x);
    }
    
    return this.arr.push(x)
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     var elem,
        len = this.min.length;
    if (this.arr.length > 0) {
        elem = this.arr.pop();
    }
        if (elem === this.min[len - 1]) {
        this.min.pop();   
    }
    return elem
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    var len = this.arr.length;
    if (len > 0) {
        return this.arr[len - 1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
        var len = this.min.length;
    return this.min[len - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */