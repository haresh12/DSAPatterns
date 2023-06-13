/*

238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

// VERY VERY VERY GOOD JOB PURE LOGIC CAME INTO MIND SUDDENLY GOT SUBMITTED IN FIRT ATTEMTED
// FOR READABLILY PUT THE CODE WAY IT IS
// THREE CASES THAT WE NEED TO THINK OF
// 1. has no zeros then no problem just devide total with current value.
// 2. has one zero then on that zero spot will have total value and in all other index will have 0
// 3. has multiple zeros then just return all zeros . (THIS IS THE ONLY BEST PART IF YOU UNDERSTAND IT WELL)
function product(arr){
 
let hasZero = false;
let total = 1;
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] === 0 && hasZero){
        return new Array(arr.length).fill(0);
    }else if(arr[i] === 0) {
        hasZero = true;
    }else{
       total*=arr[i];
    }
}

// See if it has multiple zeros then it would have not reached at this point so here we are sure that it has single zero
let res = [];
if(hasZero){
 for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] === 0){
        res[i] = total;
    }else{
        res[i] = 0;
    }
 }
}else{
    // no zeros here for sure
    for(let i = 0 ; i < arr.length ; i++){
      res[i] = Math.floor(total/arr[i])
    }
}

return res
}

console.log(product([1,2,3,4]))