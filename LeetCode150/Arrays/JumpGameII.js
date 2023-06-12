/*

Jump Game II

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1,
then 3 steps to the last index.

Input: nums = [2,3,0,1,4]
Output: 2

*/

/*
   Before this i done one question which is JumpGame in that we have to just check whether we are able to reach to that path
   or not so in simple word as soon as you reach to the path we are done with the program and in that question we really
   don't have to worry short path or long path or whatever path it is all we care is that whether we are able to reach at
   destiny or not and as soon as we reach to destiny we end the program BUT WHAT IF WE USE SAME LOGIC HERE AND rather then 
   returning we reach to the destination we continue or program and fine all path and store it in array what you say.
*/

   // WORKED WITHOUT DP WHEN YOU LEARN DP DO IT AGAIN
    function minimumJump(nums, index, path, minPath,dp) {
        if (index === nums.length - 1) {
        return Math.min(path, minPath);
        }
        let jumps = nums[index];
        for (let j = 1; index + j < nums.length && j <= jumps; j++) {
        minPath = minimumJump(nums, index + j, path + 1, minPath,dp);
        
        }
        return minPath;
    }
    const minPathLength = minimumJump([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0], 0, 0, Number.MAX_SAFE_INTEGER,[]);
    console.log(minPathLength);





