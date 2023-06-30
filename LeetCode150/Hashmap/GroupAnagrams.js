/*
 49. Group Anagrams

 Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the
 original letters exactly once.

xample 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/


function groupAnagram(strs){
 let output = [[strs[0]]]; // [[eat],[tea]]
 let alreadyIn = false;
 for(let i = 1 ; i < strs.length; i++){
      alreadyIn=false
     for(let j = 0 ; j < output.length;j++){
       if(isAnagram(output[j][0],strs[i])) {
           output[j].push(strs[i]);
           alreadyIn=true;
           break;
       }
     }
     if(!alreadyIn){
        output.push([strs[i]]);
        alreadyIn=false
     }
 }
 return output;
}

function isAnagram(s,t){
 if(s.length !== t.length) return false;
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
        sMap[t[i]]-=1;
        if(sMap[t[i]] === 0) delete sMap[t[i]];
    }else{
        return false;
    }
 }
 return Object.keys(sMap).length === 0;
}

console.log(groupAnagram(["a"]))
