/*
    383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.


Input: ransomNote = "a", magazine = "b"
Output: false

Input: ransomNote = "aa", magazine = "ab"
Output: false

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

function ransomNote(ransomNote,magazine){
 if(magazine.length < ransomNote.length) return false;
 
 let rMap = {};

for(let i = 0 ; i < ransomNote.length ; i++){
     if(ransomNote[i] in rMap){
        rMap[ransomNote[i]]+=1;
     }else{
        rMap[ransomNote[i]] = 1;
     }
 }

 let mMap = {};

for(let i = 0 ; i < magazine.length ; i++){
    if(magazine[i] in mMap){
       mMap[magazine[i]]+=1;
    }else{
        mMap[magazine[i]] = 1;
    }
}

for(let i = 0 ; i < ransomNote.length ; i++){
   if((ransomNote[i] in mMap)&& mMap[ransomNote[i]] >= rMap[ransomNote[i]]){
      continue;
   }else{
    return false;
   }
}
return true;
}

console.log(ransomNote("aac","aabc"))