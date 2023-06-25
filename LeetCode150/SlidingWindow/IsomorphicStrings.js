/*
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.

Input: s = "egg", t = "add"
Output: true

Input: s = "foo", t = "bar"
Output: false

Input: s = "paper", t = "title"
Output: true
*/
// https://www.youtube.com/watch?v=6Qkail843d8
// DO IT BY YOUR SELF
function isIsomorphic(s,t){
if(s.length !== t.length) return false;

let map1 = {};
let map2 = {};

for(let i = 0 ; i < s.length ; i++){
    let ch1 = s[i];
    let ch2 = t[i];
    if(ch1 in map1){
        if(map1[ch1] !==  ch2) return false;
    }else{
        if(ch2 in map2){
            return false;
        }else{
            map1[ch1] =ch2;
            map2[ch2] = true;
        }
    }
}
return true
}
console.log(isIsomorphic("ppper","title"))