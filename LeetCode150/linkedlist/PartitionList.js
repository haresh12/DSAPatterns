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
function partition(head,pivot){
  let lessThen = null;
  let lessThenCurr = null
  let greaterThen = null;
  let greaterThenCurr = null;

  let temp = head;

   while(temp !== null){
     if(temp.val < pivot){
        if(lessThen === null){
           lessThen = lessThenCurr = temp
        }else {
              lessThenCurr.next = temp;
              lessThenCurr = temp
        }
     }else {
      if(greaterThen === null){
         greaterThen = greaterThenCurr = temp
      }else {
            greaterThenCurr.next = temp;
            greaterThenCurr = temp
      }
     } 
     temp = temp.next;
   }

 lessThenCurr.next = greaterThen;
 
 return lessThen;
}

console.log(partition(head,6))