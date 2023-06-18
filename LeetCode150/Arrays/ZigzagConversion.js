/*
   6. Zigzag Conversion
   
   The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
   (you may want to display this pattern in a fixed font for better legibility)


   Input: s = "PAYPALISHIRING", numRows = 3
   Output: "PAHNAPLSIIGYIR"
*/

var convert = function(s, numRows) {
   if (numRows === 1) {
       return s;
   }
   let result = '';
   const n = s.length;
   const cycleLen = 2 * numRows - 2;
   for (let i = 0; i < numRows; i++) {
       for (let j = 0; j + i < n; j += cycleLen) {
           result += s[j + i];
           if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
               result += s[j + cycleLen - i];
           }
       }
   }
   return result;
}

console.log(convert("PAYPALISHIRING",3))