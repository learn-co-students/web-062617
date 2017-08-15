/*

This is basic "functional JavaScript"

rawFood = [🌽, 🐄, 🥚]                       //=> [🌽, 🐄, 🥚]
cookedFood = arr.map(cook)                  //=> [🍿, 🍔, 🍳] transforming values and returning array
vegetarianFood = arr.filter(isVegetarian)   //=> [🍿, 🍳]     subset of the array values that meet condition
energy = arr.reduce(eat)                    //=> ⚡️ || 💩

*/

// Implement forEach (take an array, take a function)
// Call function for each item in the array
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
}

forEach([1,2,3], console.log)
[1,2,3].forEach(console.log)

// Implement map (take an array, take a function)
// Return a new array with transformed values
function map(arr, callback) {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i])
  }

  return newArr
}

let arr = [1,2,3]
let mapArr = map(arr, function(num) { return num * 2 })
console.log(mapArr) // [4,6,8]
console.log(arr) // [1,2,3]


// Implement filter (take array, take a function)
// Return a new array with a subset of values from previous array
function filter(arr, callback) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i])
    }
  }

  return newArr
}

let arr = [1,2,3,4]
let filterArr = filter(arr, function isEven(num) { return num % 2 === 0 } ) // [2,4]
console.log(filterArr) // [2,4]
console.log(arr) // [1,2,3,4]
