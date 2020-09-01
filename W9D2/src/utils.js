//Util.inherits = function (childClass, parentClass) { ... }

// const Util = {           ES6
//     inherits: function inherits(childClass, parentClass) {
//       //...
//     }
//   };
  
//   module.exports = Util;

const Util = {
    inherits(childClass, parentClass) {
      //...
      function Surrogate() {};
      //debugger
      Surrogate.prototype = parentClass.prototype;
      childClass.prototype = new Surrogate();
      childClass.prototype.constructor = childClass;
    },
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }
  };

// function Surrogate() { }
// Surrogate.prototype = Animal.prototype;
// Cat.prototype = new Surrogate();
// Cat.prototype.constructor = Cat;


  module.exports = Util;

