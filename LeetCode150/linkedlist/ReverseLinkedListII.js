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
//https://www.youtube.com/watch?v=RF_M9tX4Eag not able to do 
/*
   I THING I NEED A LOT MORE PRACTICE IN LINKED LIST WHEN IT COMES TO PLAYING WITH NODES SO LETS WATCH 
   THIS LOVE BABBER VIDEO TO CLEAR FEW BASIC CONCEPT ABOUT LINKED LIST AND THEN MOVE BACK TO THIS QUESTION
*/

 function reverse(head){
  let curr = head;
  let prev = null;
  
  while(curr !== null){
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp
  }
  return prev
 }

 console.log(reverse(head))

