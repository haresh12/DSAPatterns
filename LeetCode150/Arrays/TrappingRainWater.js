/*
   42. Trapping Rain Water
   
   Given n non-negative integers representing an elevation map where the width of each bar is 1,
   compute how much water it can trap after raining.

   Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
   Output: 6
   Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
   In this case, 6 units of rain water (blue section) are being trapped.

   Input: height = [4,2,0,3,2,5]
   Output: 9
*/

// GREAT JOB DONE BY SELF 
function trappingRainWater(heights){
 
// left side max values
 let leftMaxArr = [];
 leftMaxArr[heights.length-1] = 0; 
 let currLeftMax = heights[heights.length-1];
 for(let i = heights.length - 2; i >= 0 ; i--){
   if(heights[i] > currLeftMax){
      currLeftMax = heights[i];
   }
    leftMaxArr[i] = currLeftMax;
 }

 // right side max value
 let rightMaxArr = [];
 rightMaxArr[0] = 0;
 let currRightMax = heights[0];

 for(let i = 1 ; i < heights.length ; i++){
    if(heights[i] > currRightMax){
        currRightMax = heights[i];
    }
    rightMaxArr[i] = currRightMax;
 }

 // Diff  Understand why we are not including first and last one from heights array because it won't make sense.
 let trappingWater = 0;
 for(let i = 1 ; i < heights.length - 1; i++){
    trappingWater+=Math.min(leftMaxArr[i],rightMaxArr[i]) - heights[i];
 }
 return trappingWater;
}

console.log(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]))