/*
   Majority Element II
   Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

   Input: nums = [3,2,3]
   Output: [3]

   Input: nums = [1]
   Output: [1]

   TRICKY BECAUSE YOU NEED TO FIND ALL POSSIBLE ELEMENTS

   // SAME AS MAJORITY ELEMENT FIRST FIND THE POTAINTIOAL WINNER THEN LOOP THROUGH THE ARRAY AND CHECK IF IT EXIST MORE THEN 
   N/2 OR N/3 SEE HERE N/2 N/3 N/4 ALL THESE ARE JUST FOR CONFUTION THING THEM LIKE VOOTING RULES
*/

// https://www.youtube.com/watch?v=yDbkQd9t2ig (TRY FOR N/4 BY SELF)
function majorityElements(nums){

   let count1 = 0;
   let count2 = 0;

   let potential1 = Number.MIN_SAFE_INTEGER
   let potential2 = Number.MIN_SAFE_INTEGER

    for(let i = 0 ; i < nums.length ; i++){

       if(nums[i] === potential1){
        count1++;
       }else if(nums[i] === potential2){
        count2++;
       }else if(count1 === 0){
         potential1 = nums[i];
         count1++;
       }else if(count2 === 0){
        potential2 = nums[i];
        count2++;
       }else{
         count1--;
         count2--;
       } 
    }

    console.log(potential2)
   let potential1Total = nums.filter(num => num === potential1).length 
   let potential2Total = nums.filter(num => num === potential2).length 
  
   console.log(potential1Total,potential2Total)
   let output = [];
   if(potential1Total*3 > nums.length) output.push(potential1);
   if(potential2Total*3 > nums.length) output.push(potential2);

   return output;
}

console.log(majorityElements([1,2]))