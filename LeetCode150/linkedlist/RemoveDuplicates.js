/*
   82. Remove Duplicates from Sorted List II
   
   Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
   leaving only distinct numbers from the original list. Return the linked list sorted as well.

   Input: head = [1,2,3,3,4,4,5]
   Output: [1,2,5]

   Input: head = [1,1,1,2,3]
   Output: [2,3]
*/

function removeDup(head){

 let length = 0;
 let temp = head
 while(temp !== null) {
    temp = temp.next;
    length++;
 }

 let prev = head;
 let curr = head;
 for(let i = 2 ; i <= length ; i++){
     curr = curr.next
     if(prev && curr && prev.val === curr.val){
        prev = curr.next.next
     }  
 }
}