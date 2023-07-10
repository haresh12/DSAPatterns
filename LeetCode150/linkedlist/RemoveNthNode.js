/*
   19. Remove Nth Node From End of List

   Given the head of a linked list, remove the nth node from the end of the list and return its head.


   Input: head = [1,2,3,4,5], n = 2
   Output: [1,2,3,5]

   Input: head = [1], n = 1
   Output: []

   Input: head = [1,2], n = 1
   Output: [1]

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
// OK HERE IS THE THING IT WORKED OUT AND PASSED MOSTLY IN 2 RUN GOOD THING BUT I FEEL WE NEED MORE CLEAR CODE 
// WE NEED MORE UNDERSTAND OF LINKED LIST I THING MOST OF THE DECISION ARE MADE BASED ON ASSUMTION    
function removeFromEnd(head,n){

   let length = 0;
   
   let temp = head;

   // first find the length 
   while(temp !== null){
      length++;
      temp = temp.next;
   }

 if(length === n){
 // means you are trying to remove head
  head = head.next;
 }else {
    let nodeBefore = length - n ;

    let curr = head;
    for(let i = 1 ; i < nodeBefore ; i++){
       curr = curr.next;
    }
   
    // time to remove node 
    let nodeAfterRemove = curr.next === null ? null : curr.next.next;
     curr.next = nodeAfterRemove;
 }


 return head
}

console.log(removeFromEnd(head,5))