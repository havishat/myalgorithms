/*
1  2  3  4
5  6  7  8
9 10  11 12
13 14 15 16

should print
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10 clockwise
1 5 9 13 14 15 16 12 8 4 3 2 6 10 11 7 anticlockwise

1   2 3   4 5
6   7 8   9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25

1  2  3  4  5
6  7  8  9  10
11 12 13 14 15
16 17 18 19 20

1  2  3  4
5  6  7  8
9  10 11 12
13 14 15 16
17 18 19 20
*/

// 54. Spiral Matrix

// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

function printMatrixSpiralAntiClockWise(n) {
    exitLoop = false
    rowst = 0;
    rowend = n.length-1;
    colst = 0;
    colend = n[0].length -1;
    while(!exitLoop) {
      for (i = rowst; i < rowend; i++) {
        console.log(n[i][colst]);
      }
      for (i = colst; i < colend; i++) {
        console.log(n[rowend][i]);
      }
      for (i = rowend; i > rowst; i--) {
        console.log(n[i][colend]);
      }
      for (i = colend; i > colst; i--) {
        console.log(n[rowst][i]);
      }
      if (rowst == rowend && colst == colend) {
          console.log(n[rowst][colst]);
      }
      rowst += 1;
      colst += 1;
      rowend -= 1;
      colend -= 1;
      if (rowst > rowend || colst > colend) {
        exitLoop = true;
      } 
    }
  }
  
  function printMatrixSpiralClockWise(n) {
    exitLoop = false
    rowst = 0;
    rowend = n.length-1;
    colst = 0;
    colend = n[0].length -1;
    while(!exitLoop) {
      for (i = colst; i < colend; i++) {
        console.log(n[rowst][i]);
      }
      for (i = rowst; i < rowend; i++) {
        console.log(n[i][colend]);
      }
      for (i = colend; i > colst; i--) {
        console.log(n[rowend][i]);
      }
      for (i = rowend; i > rowst; i--) {
        console.log(n[i][colst]);
      }
      if (rowst == rowend && colst == colend) {
          console.log(n[rowst][colst]);
      }
      rowst += 1;
      colst += 1;
      rowend -= 1;
      colend -= 1;
      if (rowst > rowend || colst > colend) {
        exitLoop = true;
      } 
    }
  }
  
  //a = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
  //a = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,//22,23,24,25]]
  //a = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]
  a = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]
  console.log("Printing Clockwise")
  console.log(printMatrixSpiralClockWise(a))
  console.log("Printing AntiClockwise")
  console.log(printMatrixSpiralAntiClockWise(a))