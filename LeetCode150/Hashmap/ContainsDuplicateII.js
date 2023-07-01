/*
  219. Contains Duplicate II
  Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the 
  array such that nums[i] == nums[j] and abs(i - j) <= k.


Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false

HERE UNDERSTING THE QUESTION IS IMPORTENT SEE FIRST YOU NEED TO FIND TO NUMBERS THAT ARE EQUAL THEN CHECK THERE INDEX AND 
SEE THAT FIRST NUMBER INDEX - SECOND NUMBER INDEX IS LESS THEN OR EQUAL TO K.

OVERALL QUESTION IS VERY SIMPLE BUT IF WE TALK ABOUT THEY REPRESNATION OF QUESTION IS HARD
*/

// DONE IN 10 MINUTE GOOD JOB BUT MAKE SURE ONE TRICKY THING HERE IS TO UPDATE THE map[nums[i]] = i IN IF CONDITION
// ALSO BECAUSE NEXT TIME WE COMPARE THEN WE COMPARE WITH NEAREST ONE
function containsDup(nums,k){
 let map = {}
 for(let i = 0 ; i < nums.length ; i++){
   if(nums[i] in map){
     let preIndex = map[nums[i]];
     let currIndex = i;
     let isGreater =  Math.abs(preIndex - currIndex) <= k 
     if(isGreater) return true;
     map[nums[i]] = i; // EVERYTHING WAS CLEAR AND CLEAN UNTIL WE FORGOT THIS LINE MI LINE IN ENTIRE PROGRAM 
   }else{
     map[nums[i]] = i;
   } 
 } 
 return false  
}

console.log(containsDup([1,2,3,1],3))