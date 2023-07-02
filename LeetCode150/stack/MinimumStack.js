/*
  155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 
*/


class MinStack {
    constructor(){
       this.stack = [];
       this.minstack = [];
    }

 push(val){
 this.stack.push(val);
 if(this.minstack.length === 0){
   this.minstack.push(val); 
 }else {
    let last = this.minstack[this.minstack.length-1];
   if(val >= last){
    console.log(val,last)
       this.minstack.pop();
       this.minstack.push(val);
       this.minstack.push(last) 
    }else if (val < last){
        this.minstack.push(val)
    }
 } 
 }

 top(){
    return this.stack[this.stack.length-1];
 }

 pop(){
  if(this.stack.length === 0) return;
  let last = this.stack.pop();
  if(this.minstack[this.minstack.length - 1] === last){
    this.minstack.pop();
  }
 }

 getMin(){
    console.log(this.minstack)
    return this.minstack[this.minstack.length-1];
 }
}

const stack  = new MinStack();
stack.push(2)
stack.push(0)
stack.push(3)
stack.push(0)
console.log(stack)
 
