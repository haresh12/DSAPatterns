/*
  54. Spiral Matrix

  Given an m x n matrix, return all elements of the matrix in spiral order.

  Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
  Output: [1,2,3,6,9,8,7,4,5]


  Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
  Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/


//https://www.youtube.com/watch?v=SVFXEqn3Ceo (WATCH ATLEAST 3 TIME AS DIRECTLY WATCHING VIDEO)

// NOT DONE YET FIX SOME ISSUE
function spiralMatrix(matrix){
  let minColon = 0
  let minRow = 0;
  let maxColon = matrix[0].length - 1;
  let maxRow = matrix.length -1;
  let total = (maxRow * maxColon)
  let count  = 0;
  let output = [];
  while(count < total){
    // left wall
        for(let i = minRow ; i <= maxRow && count < total ; i++){
            output.push(matrix[i][minColon]);
            count++;
        }
        minColon++;

    // bottom wall
      for(j = maxColon ; j <= maxColon  && count < total ; j++){
        output.push(matrix[maxRow][j]);
        count++;
      }
      maxRow--;

    // right wall

    for(let i = maxRow ; i >= minRow - 1 && count < total; i--){
        output.push(matrix[i][maxColon]);
        count++;
    }
    maxColon--;

    // top wall
     for(let i = maxColon ; i >= minColon - 1 && count < total; i--){
        output.push(matrix[minRow][i]);
        count++;
     }
    minRow++;
  }

  return output;
}