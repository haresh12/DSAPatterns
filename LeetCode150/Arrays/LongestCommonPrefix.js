/*
   14. Longest Common Prefix

   Write a function to find the longest common prefix string amongst an array of strings.
   If there is no common prefix, return an empty string "".

   Input: strs = ["flower","flow","flight"]
   Output: "fl"

   Input: strs = ["dog","racecar","car"]
   Output: ""
   Explanation: There is no common prefix among the input strings.
*/

// INCREDIBLE JOB DONE IN 10 MIN AND BETTER THEN I WAS DOING PREVIOUSLY
function getLongestCommontPrefix(strs){
  
 let common = strs[0];

 for(let i = 1 ; i < strs.length ; i++){
    common = getNewCommon(strs[i],common)
 }
 return common;
}

function getNewCommon(curr,prev){
 let newCommon = "" 
 for(let i = 0 ; i < curr.length ; i++){
   if(!curr[i] || !prev[i] || (curr[i] !== prev[i])) return newCommon; 
   if(curr[i] === prev[i]) newCommon+=curr[i];
 } 
 return newCommon;
}

console.log(getLongestCommontPrefix(["cir","car"]))