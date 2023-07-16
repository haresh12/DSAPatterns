/*
  
36. Valid Sudoku

 https://leetcode.com/problems/valid-sudoku/?envType=study-plan-v2&envId=top-interview-150 

*/


/*
  See when i looked into this problem first then first thing came into mind is check first for row then colon and then 
  we check for 3*3  but i thought its not good soultion but i thing in neetcode video we have same solution then 
  why not try it by our self
*/

let matrix = [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]];
function isValidSudo(arr){

   for (let i = 0; i < 9; i++) {
      let row = new Set(),
          col = new Set(),
          box = new Set();
  
      for (let j = 0; j < 9; j++) {
        let _row = board[i][j];
        let _col = board[j][i];
        let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
        
        if (_row != '.') {
          if (row.has(_row)) return false;
          row.add(_row);
        }
        if (_col != '.') {
          if (col.has(_col)) return false;
          col.add(_col);
        }
        
        if (_box != '.') {
          if (box.has(_box)) return false;
          box.add(_box);
        } 
      }
    }
    return true
}

console.log(isValidSudo(matrix))

