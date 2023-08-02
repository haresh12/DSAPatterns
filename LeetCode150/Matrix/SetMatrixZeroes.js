/**
 * 73. Set Matrix Zeroes
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.You must do it in place
 * 
 * Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
   Output: [[1,0,1],[0,0,0],[1,0,1]]
 */

let matrix = [[1,1,1],[1,0,1],[1,1,1]]

// MAKE SURE IN LEETCODE QUESTION IT CAN HAVE ANY VALUE NOT ONLY 0 AND 1
//https://www.youtube.com/watch?v=N0MgLvceX7M

// 1. brute force

function setZeros(matrix){
  let n = matrix.length;
  let m = matrix[0].length;

  for(let i = 0 ; i < n ;i++){
     for(let j = 0 ; j < m ; j++){
          if(matrix[i][j] === 0){
              markRow(i,m);
              markCol(j,n);
          }
     }
  }

  // change '' to 0
  for(let i = 0 ; i < n ;i++){
    for(let j = 0 ; j < m ; j++){
        if(matrix[i][j] === ''){
            matrix[i][j] = 0;
        }
    }
 }
 return matrix;
}

function markRow(i,m){
  for(let j = 0 ; j < m ; j++){
      if(matrix[i][j] !== 0){
        matrix[i][j] = '';
      }
  }   
}

function markCol(j,n){
for(let i = 0 ; i < n ; i++){
  if(matrix[i][j] !== 0){
    matrix[i][j] = '';
  }
}   
}

setZeros(matrix)