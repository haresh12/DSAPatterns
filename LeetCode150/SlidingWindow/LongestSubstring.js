/*
   3. Longest Substring Without Repeating Characters
   Given a string s, find the length of the longest  substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.


Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// DONE BU SELF BUT TOOK LOT OF TIME
function longestSub(str){
let substring  = "";
let left  = 0;
let right = 0;
let max = 0

while(right < str.length){
   if(!substring.includes(str[right])){
     substring+=str[right];
     right++;
   }else{
      max = Math.max(max,right-left)
      let index = substring.indexOf(str[right])
      left+= index + 1; // ALL THINGS WHERE CLEAR BUT THIS ONE LINE TOOK ALMOST 1 HOUR TO COMES IN MIND
      let newSub = str.substring(left,right+1);
      substring = newSub
      right++;
   }
}
max= Math.max(max,substring.length); // IF YOU UNDERSTAND THIS ONE YOU UNDESTAND LIFE VHA
return max;
}

console.log(longestSub(" "))