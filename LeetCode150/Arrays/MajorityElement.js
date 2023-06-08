/*
   Majority Element : 
   Given an array nums of size n, return the majority element.
   The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 Input: nums = [3,2,3]
 Output: 3  

 Input: nums = [2,2,1,1,1,2,2]
 Output: 2 
*/

// This is specific algorithm based question if we wanted to do in linear time and O(1) space but with O(n) space 
// its quite easy just store key of the specific number and increase value ++ every time they accure.

/// Another way you can do sorting 

// https://www.youtube.com/watch?v=X0G5jEcvroo (All possible Solution)

function majorityElementBrute(nums){

  let map = {};
  for(let i = 0 ; i < nums.length ; i++){
    if(nums[i] in map){
      map[nums[i]]++;
    }else{
      map[nums[i]] = 1;
    }
  }
  
  let max = Number.MIN_SAFE_INTEGER;
  let key;
  let keys =  Object.keys(map);
  for(let i = 0 ; i < keys.length ; i++){
       if(max < map[keys[i]]){
           max = map[keys[i]]; 
           key = keys[i];
       }
  }

  // Till here you have key value that is exist highest number of time in array but understand in question it mentioned 
  // that element should be present more then n/2 time where n is length of array
  if(map[key] * 2 > nums.length){
     return key;
  }else return -1;
}

// const res = majorityElementBrute([3,2,3])

// Here is question they mentioned that we will always have majority element so no need to check for it
function majorityElements(nums){
  
  let prevMajor = nums[0];
  let total = 1;

  for(let i = 1 ; i < nums.length ; i++){

    if(prevMajor === nums[i]){
      total++
    }else{
      total--;
    }
    if(total === 0) {
      prevMajor = nums[i];
      total = 1; // MUST UNDERSTAND THIS ONE
    }
  }
 return prevMajor
}

const res = majorityElements([2,2,1,1,1,2,2])

