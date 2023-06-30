/*
 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
*/

// DONE IN LESS THEN TWO MINUTE GOOD
function twoSum(arr,target){
 
let map = {};

for(let i  = 0 ; i < arr.length ; i++){
    if(target - arr[i] in map){
        return [map[target-arr[i]],i]
    }else{
        map[arr[i]] = i;
    }
}
return -1;
}

console.log(twoSum([3,2,4],6))