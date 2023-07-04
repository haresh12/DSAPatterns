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
// SEE BELOW APPROCH IS EAISEST ONE WE DON'T NEED TO WORRY ABOUT REMEMBERING THE ANY EQUESTION OR SOMETHING 
// SO WILL STICK WITH THIS ONE UNDERSTAND IT BETTER
class MinStack {
 constructor (){
  this.stack = [];
 }

 push(val){
   this.stack.push({
    val,
    min :this.stack.length > 0 ? Math.min(val,this.getMin()) : val  // ALSO THIS CONDITION IS MUST ELSE YOU WILL GET NAN ,NAN ,NAN
   })
 }

 pop(){
  return this.stack.pop();
 }

 top(){
  return this.stack[this.stack.length-1];
 }

 getMin(){
  return this.stack[this.stack.length-1].min; // Forgot to return value from here and spend 20 min  
 }
}

const stack  = new MinStack();

stack.push(-2);
stack.push(0);
stack.push(-3);
stack.push(1);
 
  
