console.log('webpack test2');
//debugger
//import MovingObject from "./moving_object.js";
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroids.js");
document.addEventListener("DOMContentLoaded", function () {
    const canvasElement = document.getElementById("game-canvas");//[0];
     //debugger
    const ctx = canvasElement.getContext("2d");
    window.MovingObject = MovingObject;
    window.Asteroid = Asteroid;
    window.ctx = ctx;
});