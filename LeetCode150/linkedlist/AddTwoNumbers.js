/*
  2. Add Two Numbers
  You are given two non-empty linked lists representing two non-negative integers.
  The digits are stored in reverse order, and each of their nodes contains a single digit. 
  Add the two numbers and return the sum as a linked list.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

/*
   This one also i done in past and importent think to remember here is few edge cases and also make sure 
   that this question become easy because we have list in reverse order and also list are non empty so it helps 
   us to keep away from few test cases
*/

// BEFORE DOING THIS LETS FIRST UNDERSTAND HOW TO COVERT ARRAY TO LINKED LIST
/*
   SEE I DONE BELOW STUFF IN 5 MINUTE ALL I AM TRYING TO SAY IS LINKED LIST IS EASY IF YOU UNDERSTAND THE BASE
   AND THIS IS THE ONLY DATA STRUCTUE WHERE RATA FICATION WON'T WORK
*/
// class Node {
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }

// let list = null;
// let head = null
// function add(val){
// let newNode = new Node(val);
// if(list === null){
//     list = head = newNode;
// }else{
//     list.next = newNode;
//     list = newNode;
// }  
// }

// add(1);
// add(2);
// add(3);
// add(4);
// add(5);
// add(6);
// add(7);

// console.log(JSON.stringify(head))


class Node {
   constructor(val){
     this.val = val;
     this.next = null;
   } 
}

let list1 = {
  val : 1,
  next : {val : 2 , next : {val : 3 , next : {val : 4 , next : {val : 8 , next : null}}}}  
}
/*
   OK FIRST GOOD JOB THAT DONE BY SELF EVEN IT TOOK MORE TIME THEN EXPECTED BUT HERE ARE THE FEW MISTAKE YOU MADE

   1. IN YOUR MIND YOU WERE STILL NOT CLEAR WHAT DO WE MEAN BY REVERSE LIST INPUT IT IMPECT LOT ON YOUR THOUGHTS
   2. YOU FORGOT TO RESET THE CARRY AND BEACUSE OF THAT IT WILL ALWAYS ADD 1 AT THE END
*/
function addTwoNumbers(list1,list2){
let head = null;
let curr = null;
let carry = 0;

while(list1 !== null && list2 !== null){
  let sum = list1.val + list2.val + carry;
  carry = 0;
  let newNode = null;
   if(sum >= 10){
      carry = 1;
      newNode = new Node(sum%10);
   }else{
     newNode = new Node(sum);
   }

   if(head === null){
     head = curr = newNode;
   }else{
    curr.next = newNode;
    curr = newNode;
   }
   list1 = list1.next;
   list2 = list2.next;
}

while(list1 !== null){
    let sum = list1.val + carry;
    carry = 0;
    let newNode = null;
     if(sum >= 10){
        carry = 1;
        newNode = new Node(sum%10);
     }else{
       newNode = new Node(sum);
     } 
     curr.next = newNode;
     curr = newNode;   
     list1 = list1.next;

}

while(list2 !== null){
    let sum = list2.val + carry;
    carry = 0;
    let newNode = null;
     if(sum >= 10){
        carry = 1;
        newNode = new Node(sum%10);
     }else{
       newNode = new Node(sum);
     } 
    curr.next = newNode;
    curr = newNode;      
    list2 = list2.next;

}

if(carry !== 0) {
    curr.next = new Node(carry);
    curr = null
}
return head;
}

console.log(addTwoNumbers(list1,list1))