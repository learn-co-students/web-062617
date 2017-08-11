/**
  ✓ Review
    ✓ Function Constructor syntax
    ✓ Class syntax
    ✓ Prototypes
  * Instance and classes
    ✓ Methods
    ✓ Variables
    ✓ Closures (private variables)
    ✓ Immediately Invoked Function Expressions
    * Object relations
**/

// Our Domain –– Deserts!!
// cookie                   ['flour', 'sugar', 'butter', 'eggs']
// cherry pie               ['cherries', 'flour', 'butter', 'sugar']
// lemon meringue           [egg whites, lemon, sugar]
// peanut butter mousse     [peanut butter, cream]

// OLD WAY – Function Constructor
// // Constructor method
// // cookie = new Dessert('cookie', ['flour', 'sugar', 'butter', 'eggs'])
// function Dessert(name, ingredients) {
//   this.name = name
//   this.ingredients = ingredients
// }
//
//
// // Instance method
// // cookie.cook()
// Dessert.prototype.cook = function() {
//   console.log(`${this.name} is cooked!`);
// }
//
//
// // Class methods
// // Dessert.buyGroceries()
// Dessert.buyGroceries = function() {
//   console.log('buying groceries')
// }


//  NEW WAY – Class syntax
const Dessert = (function createDessert() {
  let counter = 0
  let instances = []

  return class Dessert {

    // Constructor method
    // cookie = new Dessert('cookie', ['flour', 'sugar', 'butter', 'eggs'])
    constructor(name, ingredients) {
      this.id = ++counter
      this.name = name
      this.ingredients = ingredients
      instances.push(this)
    }

    // Instance methods
    // cookie.cook()
    cook() {
      console.log(`${this.name} is cooked!`);
    }

    // Class methods
    // Dessert.buyGroceries()
    static buyGroceries() {
      console.log('buying groceries')
    }

    // Dessert.all()
    static all() {
      return instances
    }

    // class method in ruby
    // def self.all
    //    puts self // class itself
    // end

    // Dessert.last()
    static last() {
      return counter
    }
  }
})()

// let instances = []
// Dessert.instances = []


// What is the `new` keyword doing?
// cookie = new Dessert('cookie', ['flour', 'sugar', 'butter', 'eggs'])
// 1. Create a new object `{}`
// 2. Attach the Dessert prototype
// 3. Calling the constructor function BOUND TO THE NEW OBJECT
// 4. Returning the new object
