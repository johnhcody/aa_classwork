const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");

// function Asteroid extends MovingObject {

//         Asteroid.COLOR = 'red';
//         Asteroid.RADIUS = 50;

//         constructor (pos, call MovingObject superconstruvtor) {
//             //super(new MovingObject)
//             newAsteroid = new MovingObject(pos, color = Asteroid.COLOR, radius = Asteroid.RADIUS, vel = Util.randomVec(length));
//         }
    
// }

Asteroid.COLOR = 'red';
Asteroid.RADIUS = 50;

Util.inherits(Asteroid, MovingObject);

function Asteroid (options) {
    options.color = Asteroid.COLOR;
    options.radius = Asteroid.RADIUS;
    options.vel = Util.randomVec(15);
    MovingObject.call(this, options);
}


module.exports = Asteroid;