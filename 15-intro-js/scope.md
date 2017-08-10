* Notes
  * Errors in JavaScript
    * Lab tests
  * Comments in JavaScript

* Scope
  * Levels
    * Global `Main/Window`
    * Lexical `function() {}`
    * Block `{}`
  * Hoisting
  * Ruby
    * Where you define the variable
    * @instance, @@class, $global, var

* Variables
  * Global    May be reassigned; scoped to program
  * `var`     May be reassigned; scoped lexically
  * `const`   Never reassigned;  scoped to block
  * `let`     May be reassigned; scoped to block

* Functions
  * Named functions
  * Function expressions

```js
num = 10

function addNum(num) {
  throw 'bad code'
}


function outer() {
  const name = 'Tim'

  function inner() {
    const name = 'Jeff'
    console.log(name)
  }
}
```
