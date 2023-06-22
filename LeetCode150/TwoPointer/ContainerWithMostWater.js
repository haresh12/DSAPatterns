/*
11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/


// VERY VERY GOOD IN FIRST RUN ALWAYS REMEBER THINKING CLEAR BEFORE CODING WORKS
function mostWater(heights){
let i = 0;
let j = heights.length-1;
let max = Number.MIN_SAFE_INTEGER;
while(i < j){
  let min =  Math.min(heights[i],heights[j]);
  let width = j - i;
  if(min * width > max) {
    max = min * width;
  }
  // Hamesha bade ki talash
  if(heights[i] < heights[j]){
    i++;
  }else{
    j--;
  }
}
return max;
}

console.log(mostWater([1,1]))