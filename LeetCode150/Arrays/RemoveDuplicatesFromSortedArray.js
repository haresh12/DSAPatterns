/*
   Remove Duplicates from Sorted Array 

   Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
   Then return the number of unique elements in nums.

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

function removeDuplicateFromSortedArray(nums){
  
 let index = 1;
 let curr = nums[0];

  // the worst thing about JS is that i had to spend 20 min just because i did't have correct spelling of length method WE
  // LOVE YOU TYPESCRIPT  
  for(let i = 1 ; i < nums.length ; i++){
    if(curr === nums[i]) continue;
    nums[index] = nums[i];
    index++;
    curr = nums[i]
  }
  return index;  
}

const res = removeDuplicateFromSortedArray([0,0,1,1,1,2,2,3,3,4]);

console.log(res)

