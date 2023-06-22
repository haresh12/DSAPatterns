/*
 167. Two Sum II - Input Array Is Sorted

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.


Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].


Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
*/

// IT SHOULD BE IN EASY QUESTION RATHER THEN BEING IN MEDIUM DONE IN 10 MIN
function twoSumII(numbers,target){
  
 let i = 0;
 let j = numbers.length-1;
 
 while(i <= j){
   if(numbers[i] + numbers[j] > target){
     j--;
   }else if(numbers[i] + numbers[j] < target){
     i++;
   }else{
    i++
    j++
    return [i,j];
   }
 }
}

console.log(twoSumII([-1,0],-1))