/*
  
36. Valid Sudoku

 https://leetcode.com/problems/valid-sudoku/?envType=study-plan-v2&envId=top-interview-150 

*/


/*
  See when i looked into this problem first then first thing came into mind is check first for row then colon and then 
  we check for 3*3  but i thought its not good soultion but i thing in neetcode video we have same solution then 
  why not try it by our self
*/

// https://www.youtube.com/watch?v=TjFXEUCMqI8&t=250s

// First the basis idea here is that we need to check that row should not have any duplicate
// Then we need to check colon should not have any duplicate now this two things are easy to 
// check because with [i][j] you get row and with [j][i] you get colon and then all you have to 
// do is just put those values in set and before adding it just check if it is already exist or not
// if it is already exist then invalid sudoko. NOW WE CHECK FOR ROW AND COLON BUT HARD PART COMES WHEN WE
// CHECK FOR SQUERE AND THATS WHAT WE HAVE TO FOCUS MORE ON.
let matrix = [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]];
function isValidSudo(board){

   for (let i = 0; i < 9; i++) {
      let row = new Set(),
          col = new Set(),
          box = new Set();
  
      for (let j = 0; j < 9; j++) {
        let _row = board[i][j];
        let _col = board[j][i];
        let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)] // this is one thing hard to remember
        
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

