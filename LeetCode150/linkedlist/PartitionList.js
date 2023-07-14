/*
   86. Partition List

   Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

   You should preserve the original relative order of the nodes in each of the two partitions.

   Input: head = [1,4,3,2,5,2], x = 3
   Output: [1,2,2,4,3,5]   

   Input: head = [2,1], x = 2
   Output: [1,2]
*/

// T

let head = {
   val : 8,
   next : {
      val : 7,
      next : {
          val : 3,
          next : {
            val : 5,
            next : {
              val : 9,
              next : {
               val : 11,
               next : {
                  val : 2,
                  next : null
               }
              }
            }
          }
      } 
   }   
  }

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  } 
}
function partition(head,val){
   let lessThenHead = null;
   let lessThenCurr = null;

   let greaterThenHead = null;
   let greaterThenCurr = null;

   let temp = head;

   while(temp !== null){
      let newNode = new Node(temp.val)
      if(temp.val < val){
          if(lessThenHead === null){
            lessThenHead = lessThenCurr = newNode
          }else{
            lessThenCurr.next = newNode;
            lessThenCurr = newNode 
          } 
      }else{
         if(greaterThenHead === null){
            greaterThenHead = greaterThenCurr = newNode
          }else{
            greaterThenCurr.next = newNode;
            greaterThenCurr = newNode 
          } 
      }
      temp = temp.next;
   }
 
 if(lessThenCurr === null) return greaterThenHead

  lessThenCurr.next = greaterThenHead;

  return lessThenHead
}

console.log(partition(head,6))