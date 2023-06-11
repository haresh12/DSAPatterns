/*
55. Jump Game

You are given an integer array nums. You are initially positioned at the array's first index,
and each element in the array represents your maximum jump length at that position.

 Return true if you can reach the last index, or false otherwise.

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/

/// THIS IS SOLUTION WITHOUT DP WORKING FINE NEED TO MORE FOCUS ON DP
/// INCREDIBLE THIS ONE GOT SUBMITTED WITH DP SOLUTION
function canJump(nums,index,dp){
 if(index === nums.length - 1) return true;
 if(dp[index] !== undefined) return dp[index];
 let jumps = nums[index];
 for(let j = 1 ; j + index < nums.length && j <= jumps; j++){
    let can = canJump(nums, index+j,dp);
    dp[index+j] = can;
    if(can) return true;
 }
 dp[index] = false;
 return false;
}

console.log(canJump([2,3,1,1,4],0,[]))
