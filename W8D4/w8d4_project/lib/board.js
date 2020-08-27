let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let myGrid = [...Array(8)].map(e => Array(8));
  myGrid[3][4] = new Piece("black");
  myGrid[4][3] = new Piece("black");
  myGrid[3][3] = new Piece("white");
  myGrid[4][4] = new Piece("white");
  return myGrid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let arr = [0,1,2,3,4,5,6,7]

  if (arr.includes(pos[0]) && arr.includes(pos[1])) {
    return true;
  } else {
    return false;
  }

};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */

 // is isValidPos as helper method
 // return value of elemet as specified position.  
Board.prototype.getPiece = function (pos) {
  if (this.isValidPos(pos) === true) {
    let [x,y] = pos;
    return this.grid[x][y];
  } else {
    throw new Error('Not a Valid Pos!');
  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  const piece = this.getPiece(pos);
  if (piece) {
    if (piece.color === color) {
      return true;
    } else {
      return false;
    }
  }
    
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  const piece = this.getPiece(pos);
  if (piece) {
    return true;
  } else {
    return false;
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 * 
 * Appraoch:
 *   -  Base Case for Recursive (positionsVisited.length === 63? )
 *   -  Iterate through DIRS array 
 *          (check for each positions color and if it is valid)
 *          ()
 * 
 * 
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){

  
   let [x, y] = pos; // [0, 0]  if dir === [1,1]  // [0,-1] 
   let [i, j] = dir;
   
  if (this.isValidPos(pos) === false) {
    return [];
  } else if (!(this.grid[x + i][j + y])) {
    return [];
  } else if (((this.grid[x + i][j + y]).color) === (this.grid[x][y].color)) {
    return [];
    // let nextMove = this.grid[x + i][j + y];
  }

  // if ((nextMove.color === this.color) || ) {
  //   return piecesToFlip;
  // } else {
  //   // piecesToFlip = [];
  //   let color = this.color;
  //   piecesToFlip.push(this.grid[x + i][y + j]);
  //   this._positionsToFlip(nextMove, color, dir, piecesToFlip);  
  // }
  // return piecesToFlip;
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};



module.exports = Board;
