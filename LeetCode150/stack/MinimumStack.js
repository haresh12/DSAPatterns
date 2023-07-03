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

//https://www.youtube.com/watch?v=Trz7JM610Uc (Stuck with getMin and was not able to do in constant time)
class MinStack {
    constructor(){
      this.data = []
    }

  push(val){
   this.data.push({
      value : val,
      min : this.data.length === 0 ? val: Math.min(val,this.getMin())
    })
  }  

  pop(){
   return this.data.pop()
  }

  top(){
   return this.data[this.data.length - 1].value;
  }

  getMin(){
   return this.data[this.data.length - 1].min
  }
}

const stack  = new MinStack();
stack.push(2)
stack.push(0)
stack.push(3)
stack.push(0)
console.log(stack)
 
