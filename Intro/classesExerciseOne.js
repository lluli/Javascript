// We would like to implement a class to represent a user account. 
// Here is how we should be able to use this class:

// > const user = new User('Uma');

// > user.getName(); 
// 'Uma'

// > user.getIntroduction();
// 'Hi, my name is Uma'
// copy
// To complete this exercise, you will have to:

// Learn how to declare a class and its methods. Having a look at the Classes 
// MDN documentation is a good start.
// Initialise an attribute within the constructor special method
// Implement the User class in a file user.js so it behaves exactly like in the example code above.

// Require the file into the node REPL to verify the class is working.

// // file: rectangle.js

// class Rectangle {

//     // A constructor, to give initial arguments.
//     constructor(height, width) {
  
//       // We can define attributes stored on the instance with `this`
//       this.height = height;
//       this.width = width;
//     }
  
//     // A method.
//     getArea() {
//       return this.height * this.width;
//     }
//   }
  
//   // Export the class
//   module.exports = Rectangle;



class User {

    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    getIntroduction() {
        return `Hi, my name is ${this.name}`
    }

}

const user = new User('Uma')

console.log(user.getName())

console.log(user.getIntroduction())