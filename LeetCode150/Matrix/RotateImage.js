/*
   48. Rotate Image

   You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
   You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
   DO NOT allocate another 2D matrix and do the rotation.
*/

// HERE WE ARE FIRST TRASPOSING ROWS TO COLON AND THEN REVERSING THE COLON THIS ARE THE TWO DIFFERENT QUESTION 
// THAT WE ARE USING HERE 

/**
 * TWO STEP
 * 1. TRANSPOSE THE MATRIX : CONVERT ROW TO COLON
 * 2. REVERSE THE ROW
 */

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]


function rotate(matrix){
 let n = matrix.length;
 
 // Transfrom dry run only 50% understanding
 for(let i = 0 ; i <= n-2 ; i++){
      for(let j = i+1 ; j <= n- 1 ; j++){
        if(i === j) continue
        //swap
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp
      }
 }
 // We transformed the matrix next we need to reverse rows
 for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[i][n - 1 - j];
        matrix[i][n - 1 - j] = temp;
    }
}
 return matrix;
}

console.log(rotate(matrix))