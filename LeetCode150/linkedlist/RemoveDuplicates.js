/*
   82. Remove Duplicates from Sorted List II
   
   Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
   leaving only distinct numbers from the original list. Return the linked list sorted as well.

   Input: head = [1,2,3,3,4,4,5]
   Output: [1,2,5]

   Input: head = [1,1,1,2,3]
   Output: [2,3]
*/
let head = {
   val : 1,
   next : {
      val : 1,
      next : {
          val : 3,
          next : {
            val : 5,
            next : {
              val : 5,
              next : {
               val : 5,
               next : {
                  val : 5,
                  next : null
               }
              }
            }
          }
      } 
   }   
  }

/*
    HERE IS ONE GOOD THING AND ONE BAD TOOK ALMOST 1 HOUR TO COME UP WITH SOLUTION THATS BAD BUT IT GOOD
    SUBMITTED IN FIRST ATTEMP THAT GOOD AGAIN I AM SAYING SAME THING LINKED LIST IS EASIEST THING ON EARTH
    AND AT A SAME TIME HARDEST IF YOU TRY TO MEMORIZE IT.

    UNDERSTAND HOW MAKING CHANGE IN CURR AND PREV ARE DIRECTLY EFFECTING HEAD 

    GOOD THING IS THAT FROM STARTING YOU HAVE CARED FOR HEAD REMOVE EDGE CASE IN MIND
*/
function removeDup(head){

 let map = {};
 let temp = head;
 let length = 0;
 while(temp !== null){
    if(temp.val in map){
       map[temp.val]++;
    }else{
      map[temp.val] = 1;
    }
    length++
    temp = temp.next;
 }
 
 let curr = head;
 let prev = null;
 for(let i = 1 ; i <= length ; i++){
   if(map[curr.val] >= 2 && prev !== null){
      prev.next = curr.next
      curr = curr.next; /// THIS IS THE LINE YOU WILL ALWAYS REMEMBER TOOK 1 HR TO COME IN MIND
   }else if(map[curr.val] >= 2 && prev === null){
     // MEANS YOU ARE DELETING HEAD
      head = head.next;
      curr = head;
   }else{
      prev = curr;
      curr = curr.next;
   }
 }
 return head
 }

removeDup(head)