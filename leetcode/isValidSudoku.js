// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// A partially filled sudoku which is valid.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

var isValidSudoku = function(board) {
    //row
    for(var i=0;i<9;i++){
      var dict = {}
      for(var j=0;j<9;j++){
        if(!dict[board[i][j]] && board[i][j] !== "."){
          dict[board[i][j]] = 1
        } else if(board[i][j] !== ".") {
            return false 
        } 
      }
    }
     //column
     for(var j=0;j<9;j++){
      var dict = {}
      for(var i=0;i<9;i++){
        if(!dict[board[i][j]] && board[i][j] !== "."){
          dict[board[i][j]] = 1
        } else if(board[i][j] !== ".") {
            return false 
        } 
      }
    }
  
    for (let i = 0; i < board.length; i = i + 3){
      for (let j = 0; j < board[0].length; j = j + 3) {
        var matrix = {}
        let subX = i + 3;
        let subY = j + 3;
        for (let k = i; k < subX; k++) {
          for (let l = j; l < subY; l++) {
            if(!matrix[board[k][l]] && board[k][l] !== "."){
              matrix[board[k][l]] = 1
            } else if(board[k][l] !== ".") {
                return false 
            } 
          }
        }
      }
    }
  
    return true
  
  };
  
  
  board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
  
  isValidSudoku(board)


  /**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  const cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}]; 
  const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];   
  
  for (let i = 0; i < 9; i++) {              
      for (let j = 0; j < 9; j++) {            
          const digit = board[i][j];
          
          if (digit !== '.') {
              const k = Math.floor(j / 3) + (Math.floor(i / 3) * 3);

              if (boxes[k][digit] || cols[j][digit] || rows[i][digit]) {
                  return false;
              }

              boxes[k][digit] = cols[j][digit] = rows[i][digit] = true;       
          }
      }
  }
  
  return true;
};
  