/*
   242. Valid Anagram
   
   Given two strings s and t, return true if t is an anagram of s, and false otherwise.

   An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original 
   letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/


function anagram(s,t){
 if(s.length !== t.length){
    return false;
 }
 
 let sMap = {};

 for(let i = 0 ; i < s.length ; i++){
    if(s[i] in sMap){
        sMap[s[i]]+=1;
    }else{
        sMap[s[i]] = 1;
    }
 }

 for(let i = 0 ; i < t.length ; i++){
    if(t[i] in sMap){
        sMap[t[i]] -=1;
        if(sMap[t[i]] === 0) delete sMap[t[i]]; // MUST
    }else{
        return false;
    }
 }
 return Object.keys(sMap).length === 0;
}

console.log(anagram("rat","car"))