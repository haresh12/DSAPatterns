/*
   30. Substring with Concatenation of All Words


You are given a string s and an array of strings words. All the strings of words are of the same length.
A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
The output order does not matter. Returning [9,0] is fine too.

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
There is no substring of length 16 is s that is equal to the concatenation of any permutation of words.
We return an empty array.
*/

// // MAKE SURE WE NEED TO UNDERSTAND WHATS WRONG WITH THIS 160 CASE PASSED 12 FAILD WHY
// function subWithConcatination(str, arr) {
//     let left = 0;
//     let right = arr[0].length;
//     let map = initMap(arr);
//     let startIndex = -1;
//     let output = []
//     while(right <= str.length){
//       let sub = str.substring(left,right)
//        if(sub in map){
//         if(startIndex === -1) startIndex = left;
//          if(map[sub] > 1){
//             map[sub]--;
//          }else if(map[sub] === 1){
//             delete map[sub];
//          }
//          if(Object.keys(map).length === 0) {
//             output.push(startIndex);
//             map = initMap(arr);
//             left = startIndex;
//             right= left+arr[0].length;
//             startIndex=-1
//             continue;
//          }
//         left = right;
//         right = right + arr[0].length; 
//       }else if(arr.filter(item => item === sub)[0]){
//       left = startIndex+1;   // THIS TWO LINE 1 HOUR EXTRA 
//       right = left+arr[0].length;
//       startIndex=-1;
//       map=initMap(arr)
//       }else{
//         left++;
//         right++;
//         startIndex=-1;
//         map=initMap(arr)
//       }
//     }
//     return output
//   }
  
//   function initMap(arr) {
//     let map = {};
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] in map) {
//         map[arr[i]] = map[arr[i]] + 1;
//       } else {
//         map[arr[i]] = 1;
//       }
//     }
//     return map;
//   }
//   console.log(subWithConcatination("abaababbaba",["ab","ba","ab","ba"]));



  
  function subWithConcatination(str, arr) {
    let left = 0;
    let wordLength = arr[0].length;
    let targetCount = arr.length;
    let output = [];
  
    // Count the frequencies of words in arr
    let map = {};
    for (let word of arr) {
      if (word in map) {
        map[word]++;
      } else {
        map[word] = 1;
      }
    }
  
    for (let i = 0; i < str.length - wordLength * targetCount + 1; i++) {
      let seen = {};
      let j = 0;
  
      while (j < targetCount) {
        let word = str.substring(i + j * wordLength, i + (j + 1) * wordLength);
  
        if (word in map) {
          if (word in seen) {
            seen[word]++;
          } else {
            seen[word] = 1;
          }
  
          if (seen[word] > map[word]) {
            break;
          }
        } else {
          break;
        }
  
        j++;
      }
  
      if (j === targetCount) {
        output.push(i);
      }
    }
  
    return output;
  }
  
  console.log(subWithConcatination("abaababbaba", ["ab", "ba", "ab", "ba"]));
    
  
  