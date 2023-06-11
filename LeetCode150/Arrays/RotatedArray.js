/*
   189. Rotate Array : 
   Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/


/*
   This is the best question and today is the time to understand it better 

   Now before moving to the solution lets understand why even i should not think nested  loop solution and main reason is that 
   we have to set the elements here and there.

   Like see if i am on 0 index and k is 5 the 0+5 i need to set it first element on index 5.
   If i am on 1 index and k is 5 then 1+5 then i need to set it second element 5 step away from current element like 1+5 is 6.
   If i am on 2 indext and k is 5 then 2+5 then i need to set it third element on 3+5 like on 8th index.

   All above three steps looks simple in terms of code only but there is only one scenario lets take first example and understand 
   it better

   Here Array is : [1,2,3,4,5,6,7];
   and k is 3 

   Now thing about value 5 6 and 7 how will you move then 3 index far from current index because 
   because if you do that then you will get out of bound array ATLEAST IN JAVA because in JS array ==== arraylist

   And in above case we need to set values in circuler way given the example of above value 5 will be set on index 0
   value 6 will be set on index 1 and value 7 will be set on index 2.

   AND THIS IS WHERE SIMLEST MATH FORMULA AND LOGIC COMES INTO PICTURE AND THIS FORMULA HARD TO GUSSE UNTIL YOU HAVE DONE
   THIS QUESTION ATLEAST ONCE AND MAINLY UNDERSTOOD IT WELL AND THE EQUATION IS (N+K)/N WILL ALWAYS RESULT FROM [0 TO N-1]
   AND THIS MAKE SENSE LETS SEE SOME EXAMPLE

   // If you do modulo of any value with 10 then it will always have answers from [0...9]
   56%10 => 6
   69%10 => 9
   5%10 =>  5

  AND THIS IS THE FORMULA THAT WILL HELP US IN SETTING CIRCULER WAY.
*/

function rotate(nums,k){
  let res = [];
  for(let i = 0 ; i < nums.length ; i++){
   res[(i+k)%nums.length] = nums[i];
  } 

  // WHY THIS BECAUSE WE ARE NOT ALLOWED TO RETURN ANY ARRAY SO YOU GET THAT
  for(let i = 0 ; i < res.length ;i++){
   nums[i] = res[i];
 }
}

console.log(rotate([1,2,3,4,5,6,7],3))