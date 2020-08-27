/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
    this.color = color;
};

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
    if (this.color === "white") {
        return "black";
    } else if (this.color === "black") {
        return "white";
    }
};

// 1) Piece
//        #flip
// should switch colors when flipped:
// AssertionError[ERR_ASSERTION]: [Function] == 'white'
// at Context.<anonymous>(test / test.js: 24: 14)
// at processImmediate(internal / timers.js: 456: 21)
// at process.callbackTrampoline(internal / async_hooks.js: 120: 14)

// at Context.<anonymous>(test / test.js: 24: 14)
// at processImmediate(internal / timers.js: 456: 21)
// at process.callbackTrampoline(internal / async_hooks.js: 120: 14)


/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
    this.color = this.oppColor();
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
    if (this.color === "white") {
        return "W";
    } else if (this.color === "black") {
        return "B";
    }
};

module.exports = Piece;