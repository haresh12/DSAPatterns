/*

151. Reverse Words in a String

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. 
The returned string should only have a single space separating the words. Do not include any extra spaces.

Input: s = "the sky is blue"
Output: "blue is sky the"

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/
// DONE BY SELF BUT TOOK MORE THEN 45 MINUTES AND DID SAME MISTAKE OF DOING LAZINESS IN DRY RUN
function reverseWords(str){
 if(!str || str.length === 0) return;
 // Remove left and right spaces
 str = str.trim();
 // This logic is simple just to remove extra space and understand we don't need to reverse a string we need to reverse WORD
 // so simple we will create words array and then reverse them and again converte them into string
 let words = [];
 let curr = ""
 let extraSpace = false;
 for(let i = 0 ; i < str.length ; i++){
   if(str[i] !== " "){
     curr+=str[i];
     extraSpace=false;
   }else if(extraSpace){
    continue;
   }else if(str[i] === " "){
     words.push(curr)
     extraSpace = true;
     curr=""
   }
 }

  if(curr !== "") words.push(curr); // THIS IS IMPORTENT TO UNDERSTAND MANY TIME WE FORGET ABOUT HOW LAST ONE WILL BE ADDED

 return words.reverse().join(" ");
}

console.log(reverseWords("the sky is blue"))