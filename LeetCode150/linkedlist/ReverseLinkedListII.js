/*
   92. Reverse Linked List II

 Given the head of a singly linked list and two integers left and right where left <= right,
 reverse the nodes of the list from position left to position right, and return the reversed list.

 Input: head = [1,2,3,4,5], left = 2, right = 4
 Output: [1,4,3,2,5]

 Input: head = [5], left = 1, right = 1
 Output: [5]
*/

let head = {
 val : 1,
 next : {
    val : 2,
    next : {
        val : 3,
        next : {
          val : 4,
          next : {
            val : 5,
            next : null
          }
        }
    } 
 }   
}
function reverseList(head,left,right){
if(head === null) return null;    
if(left === right) return head;

le
let count = 1;
let leftPrev = null;
let leftNext =  head.next;
let rightPrev = null;
let rightNext = null;

while(head !==  null){
  if(count < left){
    leftPrev = head;
    leftNext = leftNext?.next ?? null;
  }else{
    c
  }
  head = head.next;
  count++;
} 

}

console.log(reverseList(head,))