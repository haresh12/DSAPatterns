/*
    58. Length of Last Word
    
    Given a string s consisting of words and spaces, return the length of the last word in the string.
    A word is a maximal  substring consisting of non-space characters only.

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/
/// EASY 6 MINUTE MAX TO GET IT DONE JUST MAKE SURE YOU START FROM BACK YOU NEED WORD LENGTH NOT EXECT WORD SO WORLD OR DLROW IT
// DOES NOT MATTER
function lastWord(str){
let last = ""
for(let i = str.length - 1 ; i >= 0 ; i--){
  if(last === "" && str[i] === " "){
    continue;
  }else if(last !== "" && str[i] === " "){
    return last.length;
  }else{
    last+=str[i];
  }
}
return last.length;
}

console.log(lastWord('luffy is still joyboy'))