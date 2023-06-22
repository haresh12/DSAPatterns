/*
  15. 3Sum
  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
  and nums[i] + nums[j] + nums[k] == 0.


Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/


function threeSum(nums){
  nums = nums.sort((a, b) => a - b); // Sort numerically
  console.log(nums)
  let output = [];
  for(let i = 0 ; i <nums.length -2 ; i++){
    if (i > 0 && nums[i - 1] === nums[i]) continue; //  EVERYTHING WAS CORRECT EXECPT I FORGOT THIS 

     let pairs = twoSum(nums[i],i+1,nums);
     for(let j  = 0 ; j < pairs.length ; j++){
        if(pairs[j].length > 0){
            output.push([pairs[j][0],pairs[j][1],nums[i]]);
        }
     }
  }
  return output;
}

function twoSum(target,index,nums){
 let pairs = [];
 let i = index;
 let j = nums.length - 1;
 while(i < j){
    if(target + nums[i] + nums[j] < 0){
       i++;
    }else if(target + nums[i] + nums[j] > 0){
        j--;
    }else {
       pairs.push([nums[i],nums[j]]) 
        while( nums[i] === nums[i+1]){
           i++; 
        }
        while( nums[j] === nums[j-1]){
            j--; 
         }
        i++
        j--;
    }
 }
 return pairs;
}

console.log(threeSum([-1,0,1,2,-1,-4]))