
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
    this.min = undefined;
};
//each node has a minimum value for the stack as it currently is
/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.minStack.length == 0){
        this.min = val;
    }
    if(val < this.min){
        this.min = val;
    }
    
    this.minStack.push(this.min);
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop();
    if(this.stack.pop() == this.min){
        this.min == this.minStack[this.minStack.length-1];
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */