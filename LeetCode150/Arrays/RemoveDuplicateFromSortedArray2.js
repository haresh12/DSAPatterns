/*
  Remove Duplicates from Sorted Array II

  Given an integer array nums sorted in non-decreasing order, 
  remove some duplicates in-place such that each unique element appears at most twice.
  The relative order of the elements should be kept the same.

  This Question is same as previous but only difference is that her same val can be at most twice

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

function removeDuplicateFromSortedArray(nums){

   let index = 1;
   let curr = nums[0];
   let twice = false;

   for(let i = 1 ; i < nums.length ; i++){
     if(curr ===  nums[i] && twice) continue;
     else if (curr === nums[i]) {
        twice = true
        nums[index] = nums[i]; // THIS WILL ONLY COMES IN MIND WHEN YOU DO DRY RUN INCREDIBLE JOB SPEND 3O MIN BUT HAPPY
        index++;
    }else {
        nums[index] = nums[i];
        curr = nums[i];
        twice = false;
        index++; // WHY THE HELL YOU FORGOT THIS ONE
     }
   } 
  return index; // Make sure here even we are returning index but array elemenets are also checked in leetcode background
}

const res = removeDuplicateFromSortedArray([0,0,1,1,1,1,2,3,3])
console.log(res)