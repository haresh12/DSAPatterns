/**
 * 73. Set Matrix Zeroes
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.You must do it in place
 * 
 * Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
   Output: [[1,0,1],[0,0,0],[1,0,1]]
 */

let matrix = [[1,1,1],[1,0,1],[1,1,1]]
  // brute force 
function zeroMetrix(){
 for(let i = 0 ; i < matrix.length ; i++){
     for(let j = 0 ; j < matrix[i].length ; j++){
        if(matrix[i][j] === 0){
            // makeRowZero(matrix,i);
            makeColonZero(matrix,i,j);
        }
     }
 }
  console.log(matrix)
}

function makeRowZero(matrix,i){
   let m = matrix[i].length;
   
   for(let j = 0 ; j < m ; j++){
       matrix[i][j] = 0
   }
}

function makeColonZero(matrix,col){ 
    console.log(col)   
    for(let i = 0 ; i < matrix.length ; i++){
        for(let j = 0 ; j < matrix[i].length ; j++){
            if(j ===  col){
                matrix[i][j] = 0
            }
        }
    }

 }
zeroMetrix()