/*
 148. Sort List
 Given the head of a linked list, return the list after sorting it in ascending order.

Input: head = [4,2,1,3]
Output: [1,2,3,4]

Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
*/


const sortList = function (head) {
    if(!head) return null
  
    const nodes = [];
  
    while (head) {
      nodes.push(head);
      head = head.next;
    }
  
    nodes.sort((a, b) => a.val - b.val);
  
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].next = nodes[i + 1] || null;
    }
  
    return nodes[0]

  }