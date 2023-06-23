/*
383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.


Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/

// GOOD BUT NOT MUCH FOCUSED DONE SOME SILLY MISTAKE BUT DONE IN 10 MIN
function canConstruct(ransomNote,magazine){

   let rMap = {};
   for(let i = 0 ; i < ransomNote.length ; i++){
     if(ransomNote[i] in rMap){
        rMap[ransomNote[i]]+=1;
     }else{
        rMap[ransomNote[i]]=1;
     }
   } 
   let mMap = {};
   for(let i = 0 ; i < magazine.length ; i++){
     if(magazine[i] in mMap){
        mMap[magazine[i]]+=1;
     }else{
        mMap[magazine[i]]=1;
     }
   } 


   let rMapKeys = Object.keys(rMap)


   for(let i = 0 ; i < rMapKeys.length ; i++){
      if(!mMap[rMapKeys[i]] || rMap[rMapKeys[i]] > mMap[rMapKeys[i]]) return false
   }

   return true;
}

console.log(canConstruct("fffbfg","effjfggbffjdgbjjhhdegh"))