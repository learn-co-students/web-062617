// The sum of the array using for loop
// for () {}
let array = [1,2,3,4,5,6,7,8,9]
let sum = 0

for (let i = 0; i < array.length; i++) {
  sum += array[i]
}


// The sum of the even numbers in the array using for loop
// Filter for only the even numbers
sum = 0
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    sum += array[i]
  }
}


// Get each even number multiplied by three; add them up
// Transform each number by multiplying by 3
sum = 0
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    sum += (array[i] * 3)
  }
}

// Use forEach to implement for loop directly above
sum = 0
array.forEach(function timesThreeAddToSum(element, index, arr) {
  // console.log(`${index + 1}. element`)
  // arr[index] = 1234
  if (element % 2 === 0) {
    sum += (element * 3)
  }
})


// Implement above loop without a sum variable in outer scope and without for loop
array
  .filter(num => num % 2 === 0)
  .map(num => num * 3)
  .reduce((sum, num) => sum + num)

// OR

function isEven(num) { return num % 2 === 0 }
function timesThree(num) { return num * 3 }
function sumNums(sum, num) { return sum + num }

array
  .filter(isEven)   // select in Ruby
  .map(timesThree)  // map in Ruby
  .reduce(sumNums)  // inject in Ruby
