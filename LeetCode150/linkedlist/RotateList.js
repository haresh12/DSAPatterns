/*
  61. Rotate List

  Given the head of a linked list, rotate the list to the right by k places.

  Input: head = [1,2,3,4,5], k = 2
  Output: [4,5,1,2,3]

  Input: head = [0,1,2], k = 4
  Output: [2,0,1]
*/


let head = {
    val : 0,
    next : {
       val : 1,
       next : {
           val : 2,
           next : null
       } 
    }   
}

// INCREDIBLE JOB TOOK 30 MIN BUT DONE WELL ALL THINK WHERE CLEAR BEFORE EVEN STARTING SO GOOD ONE
function rotateList(head,k){
  let length = 0; 
  let temp = head;
  while(temp !== null){
    temp = temp.next;
    length++;
  }
  
  if(k >= length){
    k = k%length
  }

  if(k === 0 || length === 0) return head;  /// try with [] input it will crash and thats why i had to add lengh condition also

  let lastNode = null;
  let newTail = null;
  let newHead = null;
  let curr = head;
  for(let i = 1; i <= length ; i++){
    if(i === length - k){
        newTail = curr;
    }else if(i === length - k + 1){
        newHead = curr;
    }else if(i === length) {
       lastNode = curr;
    }
    curr = curr.next;
  }
  let currHead = head;
  newTail.next = null;
  head = newHead;
  if(lastNode === null){
    lastNode = newHead;
  }
  lastNode.next = currHead

  return JSON.stringify(head)
}

rotateList(head,2)