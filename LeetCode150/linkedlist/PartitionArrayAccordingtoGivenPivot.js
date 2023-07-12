/*
  2161. Partition Array According to Given Pivot

You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:

Every element less than pivot appears before every element greater than pivot.
Every element equal to pivot appears in between the elements less than and greater than pivot.
The relative order of the elements less than pivot and the elements greater than pivot is maintained.
More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. For elements less than pivot, if i < j and nums[i] < pivot and nums[j] < pivot, then pi < pj. Similarly for elements greater than pivot, if i < j and nums[i] > pivot and nums[j] > pivot, then pi < pj.
Return nums after the rearrangement.


Input: nums = [9,12,5,10,14,3,10], pivot = 10
Output: [9,5,3,10,10,12,14]
Explanation: 
The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.

*/

// OK CURRENTLY I AM DOING IT ON BAD WAY WITH SPACE BUT MAKE SURE THIS IS NOT THE WAY TO DO THIS QUESTION
// https://www.youtube.com/watch?v=if40LxQ8_Xo (WE NEED TO LEARN THIS ALGO FOR SURE)

// this is brute force but really liked the idea and it should be intutive
function partition(arr,pivot){
 
  let lessThen = [];
  let equal  = [];
  let greaterThen = [];
  
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] > pivot) greaterThen.push(arr[i]);
    else if(arr[i] < pivot) lessThen.push(arr[i]);
    else equal.push(arr[i]);
  }
  return [...lessThen,...equal,...greaterThen];
}

console.log(partition([9,12,5,10,14,3],10))