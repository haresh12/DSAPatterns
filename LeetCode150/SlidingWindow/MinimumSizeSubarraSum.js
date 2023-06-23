/*
  209. Minimum Size Subarray Sum

  Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray
  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Input: target = 4, nums = [1,4,4]
Output: 1

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/
// HERE I SPENT ALMOST 1:30 HOURS AND YET LOT TO LEARN SLIDIWING WINDOW PROBLEMS NEED TO BE PRACTICED MORE
function minSubArrayLength(nums,target){
  let n = nums.length;
  let left = 0;
  let right = 0;
  let min = Infinity;
  let total = 0;
  while(right < n){
    total+=nums[right]
    if(total >= target){
        while(total >= target){
            total-=nums[left];
            left++;
            min = Math.min(min,(right-left)+2); // LOT TO LEARN
        }
    }
    right++;
  }
  return min === Infinity ? 0 : min
}

console.log(minSubArrayLength([2,3,1,2,4,3],7))