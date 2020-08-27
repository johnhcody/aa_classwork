




// const uniq = 

// const arr = [1, 1, 1, 2, 2, 3, 4, 4, 5]

// Array.prototype.uniq = function() {
    
//     const newArray = [];
//     for (let i = 0; i < this.length; i++)
//     if (!(newArray.includes(this[i]))) {
//         newArray.push(this[i]);
//     }
//     return newArray;   
// }
// // console.log(arr.uniq())

// const twoSumArray = [0, 5, 6, 3, -8, -5, -4, 4, 1]  // [[1,5],[6,7]] // sorted = [-8, -5, -4, 0, 1, 3, 4, 5, 6]

// Array.prototype.twoSum = function() {
//     const results = [];
//     // let couple = [];
//     for (let i = 0; i < this.length - 1; i ++){
//         for (let j = i + 1; j < this.length; j++) 
//         if (this[i] + this[j] === 0) {
//             results.push([i,j]);
//         }
//     }
//     return results;
// }        

// const matrix = [[1,2,3], [4,5,6], [7,8,9]] // results === [[1,4,7], [2,5,8], [3,6,9]]

// Array.prototype.transpose = function() {
//     const results = [];
//     for (let i = 0; i < this.length; i++){
//         let subArr = [];
//         for (let j = 0; j < this[i].length; j++){
//             subArr.push(this[j][i]);
//         }
//         results.push(subArr);
//     }
//     return results;
// }
// console.log(matrix.transpose())

const myEachArray = [1, 2, 3];


const doubles = function (num) {
    return num * 2;
}

Array.prototype.myEach = function(callBack) {
    
    for (let i = 0; i < this.length; i++) {
        callBack(this[i]);
    }
    
}

Array.prototype.myMap = function() {
    const results = [];
        results.push(this.myEach);

    
    return results;
}


console.log(myEachArray.myMap(doubles));




// Array.prototype.myEach = function (callBack) {
//     const results = [];
//     for (let i = 0; i < this.length; i++) {
//         results.push(callBack(this[i]));
//     }
//     return results;
// }
// const myEachArray = [1, 2, 3];


// const doubles = function (num) {
//     return num * 2;
// }

// console.log(6, myEachArray.myEach(doubles));

// //myEach(myEachArray, doubles);


// function myForEach(array, cb) {
//     for (let i = 0; i < array.length; i++) {
//       cb(array[i]);
//     }
//   }
  
//   myForEach([1, 2, 3], logIfEven);

// console.log(twoSumArray.twoSum())  // [[1,5],[6,7]] 


    // const sorted = this.sort((a, b) => a - b);

//     for (let i = 0; sorted[i] < 0; i++)
//         if (sorted.includes(sorted[i] * -1)) {
//             // couple.push(this.indexOf(sorted[i]));
//             // couple.push(this.indexOf(sorted[i] * -1));
//             // results.push(couple);
//             results.push([(this.indexOf(sorted[i])), (this.indexOf(sorted[i] * -1))]);
//         }
//     return results;
// }

// results array, push pairs (at the index), nested loop (ensuring that idx2 > idx1)

//  sort array, check each ele less than zero to see if arr includes ele with === abs value, or value of ele * -1

// [-8, -5, -4, 0, 1, 4, 5, 7, 9]


// var points = [40, 100, 1, 5, 25, 10];
// function myFunction() {
//     points.sort(function (a, b) { return a - b })



// parentheses after uniq --> uniq() execute/invoke the function uniq
// console.log(uniq([1, 1, 1, 2, 2, 3, 4, 4, 5]))

// var oldFN = Test.prototype.test;
// Test.prototype.test = function ([arguments...]) {
//     [...some custom code...]
//     oldFN.apply(this, arguments);// arguments keyword refer to the list of argument that your function recevied, if you need something else use call.
//     [...some custom code...]
// }



// console.log(arr.uniq);
// console.log(arr);


// // array.includes(element, start)
// newArray.includes(arr[i])

// // arr.includes(valueToFind[, fromIndex])
// if (condition) {
//     //  block of code to be executed if the condition is true
//   }

// index variable, new array, check for inclusion
// // this is how you monkey patch; newPersonMethod can be invoked method style on instances of Person 
// Person.prototype.newPersonMethod = function(){
    // console.log("I can be invoked method style on any instance of Person");
// }
// const newPerson = new Person("calzone");
// console.log(newPerson);