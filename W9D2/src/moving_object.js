    //debugger
function MovingObject(objectArg) {
    // debugger
    this.pos = objectArg.pos;
    this.vel = objectArg.vel;
    this.radius = objectArg.radius;
    this.color = objectArg.color;
    console.log('I am moving');
}

MovingObject.prototype.draw = function (ctx) {
    //Draw a circle
    const c = document.getElementById("game-canvas");
    debugger
    ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.stroke();
}

// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });

MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
}

//Function.prototype.inherits = function (ParentClass) { ... };

module.exports = MovingObject;
//modules.exports = {MovingObject: MovingObject};