/*
  141. Linked List Cycle


Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

/*
   I think i have done this problem many times and i thing we will use fast and slow approch for this problem 
   so take to pointer and then move one fast and one slow now in that if slow and fast reaches at same leave then
   we have cycle and if in cast fast reach to null then no cycle
*/

// GREAT JOB DONE IN 5 MIN AND DIRECTLY SUBMITTED INTO LEETCODE
function isCycle(head){
  if(head === null) return false;   
  let slow = head;
  let fast = head.next; 

  while(fast !== null && fast.next !==  null){ 
       if(fast === slow) return true;
       fast = fast.next.next;
       slow = slow.next;
  }
  return false
}

console.log(isCycle(head))