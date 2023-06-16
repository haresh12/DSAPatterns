/*
   28. Find the Index of the First Occurrence in a String
   
   Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
   or -1 if needle is not part of haystack.

   Input: haystack = "sadbutsad", needle = "sad"
   Output: 0
   Explanation: "sad" occurs at index 0 and 6.
   The first occurrence is at index 0, so we return 0.

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

// DONE IN 15 MINUTE IMPORTENT PART IS return i - needle.length + 1 THIS ONE. UNDERSTAND THIS YOU WILL UNDERSTAND EVERY THING
function firstOccurance(haystack, needle){
 if(needle.length > haystack.length) return -1;
 let temp = "";
 for(let i = 0 ; i < haystack.length ; i++){
    temp+=haystack[i];
    if(temp.includes(needle)) {
        // this is the time when condition became true now here is the magic part we have length of needle correct so check the
        // current index and substract needle.length from it to get the starting index.
        return i - needle.length + 1
    }
 }
 return -1; 
}

console.log(firstOccurance("leetcode","leeto"))