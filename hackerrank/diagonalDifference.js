// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// Input Format

// The first line contains a single integer,  denoting the number of rows and columns in the matrix . 
// The next  lines denote the matrix 's rows, with each line containing  space-separated integers describing the columns.

// Constraints

// Output Format

// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19 
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x


function diagonalDifference(a) {
    // Complete this function
    var row = 0;
    var column = a[0].length - 1;
    var sum = 0;
    var d1 = 0;
    var d2 = 0;
    
    for(var index=0; index<a.length;index++ ){
      // console.log(a[row++][column--])
        d1 += a[row][row] 
        // console.log(a[row++])
        d2 += a[row++][column--];
        sum = d1 - d2
        }
        return Math.abs(sum);
}

console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8, -12]]))