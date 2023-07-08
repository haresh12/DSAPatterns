/*
  21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

/*
   This one also i did in past and if you remember we have same question from array also where we have to sorted
   array and we need to merge them
*/


// AWSOME JOB DONE IN 10 MINUTE AND NO EDGE CASES MISSED
// ONE THING TO LEARN HERE IS LINE NUMBER 20 MAKE SURE YOU DON'T RETURN [] BLANK ARRAY YOU RETURN NULL 
// EVEN IN THERE EXAMPLES THEY HAVE RETURNED BLANK ARRAY
function mergeSorted(list1,list2){
 if(list1 === null && list2 === null) return null;
 if(list1 === null) return list2;
 if(list2 === null) return list1;
 
 let mergeList = null;
 let curr = null;

 while(list1 !== null  && list2 !== null){
    let newNode = null;
    if(list1.val < list2.val){
      newNode = new Node(list1.val);
      list1 = list1.next;
    }else{
        newNode = new Node(list2.val);
        list2 = list2.next;
    }

    if(mergeList === null){
        mergeList = curr = newNode;
    }else{
        curr.next = newNode;
        curr = newNode;
    }
 }

 while(list1 !== null){
    let newNode = null;
    newNode = new Node(list1.val);
    list1 = list1.next;
    curr.next = newNode;
    curr = newNode;
 }
 while(list2 !== null){
    let newNode = null;
    newNode = new Node(list2.val);
    list2 = list2.next;
    curr.next = newNode;
    curr = newNode;
 }

 return mergeList
}