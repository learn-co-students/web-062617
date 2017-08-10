init()

function init() {
  console.group('Look at each of these methods and read the comments in the code')
  console.log('`objectLiterals`')
  console.log('`objectLiteralsWithMethods`')
  console.log('`objectFactories`');
  console.log('`objectConstructors`');
  console.log('`objectClassSyntax`');

  console.groupEnd()
  console.log('\n\n')
}

function objectLiterals() {
  // Say you want to create an object in JavaScript that represents a person

  jason = {
    name: 'Jason',
    city: 'New York, NY'
  }

  tim = {
    name: 'Tim',
    city: 'Brooklyn, NY'
  }

  console.groupCollapsed('Create `jason` and `tim` objects') // This just organizes the console output
  console.log(jason)
  console.log(tim)
  console.groupEnd()

  // This is good for us. If we `console.log` these objects, we get the objects
  // back directly and can pass these objects around to methods and manipulate
  // all of the data in the object directly.

  jason.name = 'Json'
  tim.name = 'Timothy'

  console.groupCollapsed('Update `jason` and `tim` objects')
  console.log(jason)
  console.log(tim)
  console.groupEnd()

  // If I want to create a copy of one of the objects, one thought might be to
  // assign a new variable to one of the existing variables.

  andrew = jason
  andrew.name = 'Andrew'
  andrew.module = 3

  console.groupCollapsed('Create copy of `jason` object in `andrew`')
  console.log(andrew)
  console.groupEnd()

  // But what happened to our `jason` object?

  console.groupCollapsed('What is the current value of `jason`?')
  console.warn(jason)
  console.groupEnd()

  // Objects in JavaScript are passed by reference, which means that if you
  // assign an object to a new variable, the new variable `andrew` points
  // to the SAME object that the old variable `jason` points to. If you change
  // one, you change the other!
}

function objectLiteralsWithMethods() {
  // Now I want to add some behavior to these objects. They're people, so they
  // should be able to do things! The first thing that I would think to do would
  // be to add functions directly as properties to the objects.

  jason = {
    name: 'Jason',
    city: 'New York, NY',
    beJason: function() { console.log("I'm Jason!") }
  }

  tim = {
    name: 'Tim',
    city: 'Brooklyn, NY',
    beTim: function() { console.log("I'm Tim!") }
  }

  // These functions do pretty much the same thing, so I'm going to refactor and
  // instead of hard-coding the name in the be<Person> function, I want to grab
  // the name programmatically. I can do this by referencing `this`, the object
  // calling the method, inside of my method.

  jason.beJason = function() { console.log(`I'm ${this.name}!`)}
  tim.beTim = function() { console.log(`I'm ${this.name}!`)}

  // Now, if I change the name property of the calling object, the function will
  // be log the updated name.

  jason.name = 'JD'
  jason.beJason()

  // The two functions that we defined can be refactored even further. The
  // function definitions are EXACTLY THE SAME. So instead of creating two
  // distinct functions, lets create one and make both objects reference it.
  // It's also a good time to rename the methods to be more generic.

  delete jason.beJason()
  delete tim.beTim()

  function beYourself() { console.log(`I'm ${this.name}`) }

  jason.beYourself = beYourself
  tim.beYourself = beYourself

  // Here, we defined one function that is referenced by both objects'
  // beYourself properties, and it works just like it did before.
}

function objectFactories() {
  // Let's say that instead of writing an object literal everytime we want to
  // define a new person, and manually adding references to functions, we could
  // create a function that returns an object with predefined methods.

  // First, we define the list of methods that we want the our person objects
  // to have. For now, it's just one method, `beYourself`. We will create what's
  // called a `prototype` which is simply AN OBJECT WITH METHOD PROPERTIES

  personPrototype = {
    beYourself: function beYourself() { console.log(`I'm ${this.name}`) }
  }

  // That's it. We defined how every person should behave. Now let's define how
  // a person is created! This will require a function which returns an object
  // We know that a person will need a name and city, so we can pass those in
  // as arguments to our function. Lastly, we'll need to use a special syntax
  // to create an object so that we can use the personPrototype we created.

  function createPerson(name, city) {
    const person = Object.create(personPrototype)

    person.name = name
    person.city = city

    return person

  }

  // Now I can create a person object by saying:
  jason = createPerson('jason', 'New York')

  // And I can call the method on its prototype like this:
  jason.beYourself()
}

function objectConstructors() {
  // We're almost at the end. Creating factories is great and has it's own
  // benefits. See: https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e
  // But most of the time, we'll see a constructor function or class used.

  // Constructor functions basically do all of the work of the factory above,
  // and, when called with the `new` keyword, do some 'magic' for us.

  function Person(name, city) {
    // `this` references the newly created object!
    this.name = name
    this.city = city

    // We don't return anything!
  }

  // A downside is that we have to be really explicit about the prototype that
  // we use here. By default, it has the object's prototype, or the object literal's
  // default methods. We want a person to be able to be themself!

  // So we define the person prototype.
  personPrototype = {
    beYourself: function beYourself() { console.log(`I'm ${this.name}`) }
  }

  // And we assign it directly to the person.
  Person.prototype = personPrototype

  // Now we can safely create our jason object again.
  jason = new Person('jason', 'New York')
}

function objectClassSyntax() {
  // The dreaded JavaScript class. Before this, we knew object-oriented programming
  // and class-based programming to be the same thing! But they aren't, and
  // JavaScript has already proven to us that it doesn't have classes with
  // defined instance methods. Rather, it has objects with defined prototypes.

  // However, the friendly people creating the JavaScript standard added a sugary
  // syntax for creating objects that's much easier to reason about. (If you make
  // sure to remember that it's only doing what the code in the object constructor
  // example above is doing).

  // Here we use the class keyword and give the class a name
  class Person {

    // Then we define how to build an instance of the class. `constructor` is
    // just like `initialize` in Ruby classes.
    constructor(name, city) {

      // `this` inside of the `constructor` is the newly created instance (object)
      this.name = name
      this.city = city
    }

    // With this class syntax, I can define instance methods IN THE SAME PLACE
    // as the `constructor` function
    beYourself() {

      // `this` is bound to the instance (object) it's being called on
      console.log(`I'm ${this.name}`)
    }
  }

  // And that's pretty much it!
}
