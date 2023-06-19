/*
  68. Text Justification
  
Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
*/


// function textJustification(arr,maxWidth){

//     let Output = "";
//     let temp = arr[0];
//     let words = 1;
//     for(let i = 1 ; i < arr.length ; i++){
//         let canAdd = arr[i].length + temp.length <= maxWidth;
//         if(canAdd){
//             temp+=" "+arr[i];
//             words+=1;
//         }else{
//             let remaining = maxWidth -  temp.length;
//             while(remaining > 0){
//                 for(let i = 0 ; i < temp.length ; i++){
//                     if(temp[i] === " "){
//                         temp[i]+=" ";
//                         remaining--;
//                     }
//                 }
//             }
//               // Move to next line
//               Output+=temp+"\n"
//               temp+=arr[i];
//               words=1;
//         }
//     }
//     console.log(Output)
// }

function justifyText(words, maxWidth) {
    const result = []; // Array to store the resulting lines of justified text
    let line = []; // Array to store words for the current line
    let currentWidth = 0; // Variable to keep track of the current line width
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      // Check if adding the current word exceeds the maximum width
      if (currentWidth + line.length + word.length > maxWidth) {
        // Calculate the total number of spaces needed to reach the maximum width
        const totalSpaces = maxWidth - currentWidth;
        const numWords = line.length;
  
        // If there's only one word in the line, it should be left-justified
        if (numWords === 1) {
          const spaces = ' '.repeat(totalSpaces);
          line[0] += spaces;
        } else {
          const spacesBetweenWords = Math.floor(totalSpaces / (numWords - 1));
          const extraSpaces = totalSpaces % (numWords - 1);
  
          // Distribute the spaces evenly between the words
          for (let j = 0; j < extraSpaces; j++) {
            line[j] += ' ';
          }
  
          const spaces = ' '.repeat(spacesBetweenWords);
          line = line.join(spaces).split(' ');
        }
  
        result.push(line.join(' ')); // Add the justified line to the result array
        line = []; // Reset the line array
        currentWidth = 0; // Reset the current width
      }
  
      line.push(word); // Add the word to the current line
      currentWidth += word.length; // Update the current width
    }

   //  Join the remaining words for the last line
    const lastLine = line.join(' ');
    const spacesLeft = maxWidth - currentWidth - (line.length - 1);
    const spaces = ' '.repeat(spacesLeft);
    result.push(lastLine + spaces);
  
    return result;
  }
  
  // Example usage:
  const words = ["This", "is", "an", "example", "of", "text", "justification."];
  const maxWidth = 16;
  
  const justifiedText = justifyText(words, maxWidth);
  console.log(justifiedText);
  
