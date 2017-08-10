/**
  * Review
    * Function Constructor syntax
    * Class syntax
    * Prototypes
  * Instance and classes
    * Methods
    * Variables
    * Closures (private variables)
    * Object relations
**/

// cookie                   ['flour', 'sugar', 'butter', 'eggs']
// cherry pie               ['cherries', 'flour', 'butter', 'sugar']
// lemon meringue           [egg whites, lemon, sugar]
// peanut butter mousse     [peanut butter, cream]

// OLD WAY – Function Constructor

// Dessert
// create a function that returns a dessert object with a name and a list of ingredients
// function Dessert(name, ingredients) {
//   this.name = name
//   this.ingredients = ingredients
// }
//
// function prepare() {
//   console.log(`Preparing ${this.name}`);
// }
// prepare()
//
// // Instance method
// Dessert.prototype.cook = function() {
//   console.log(`${this.name} is cooked!`);
// }
//
// // cookie.cook()
//
// // Class methods
// Dessert.buyGroceries = function() {
//   console.log('buying groceries')
// }

// Dessert.buyGroceries()


//  NEW WAY – Class syntax


class Dessert {

  constructor(name, ingredients) {
    this.id = 0
    this.name = name
    this.ingredients = ingredients
    Dessert.all().push(this)
  }

  cook() {
    console.log(`${this.name} is cooked!`);
  }

  static buyGroceries() {
    console.log('buying groceries')
  }

  // static last() {
  // }

  static all() {
  }
}
