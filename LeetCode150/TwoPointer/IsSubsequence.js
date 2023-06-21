/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some
(can be none) of the characters without disturbing the relative positions of the remaining characters.
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Input: s = "abc", t = "ahbgdc"
Output: true

Input: s = "axc", t = "ahbgdc"
Output: false
*/

function isSubSequence(s,t){
 if(s.length > t.length) return false;
 if(s.length === 0) return true;
 let j = 0; 
for(let i = 0 ; i < t.length ; i++){
  if(s[j] === t[i]){
     j++;
  }
  if(!s[j]){
    return true;
  }
}  
return false;
}

console.log(isSubSequence("axc","ahbgdc"))