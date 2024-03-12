// Write a fizzBuzz function in JavaScript. As a reminder, this function should take a number as argument, and then either:

// Return "Fizz" if this number is divisible by 3.
// Return "Buzz" if this number is divisible by 5.
// Return "FizzBuzz" if this number is divisible by both 5 and 3.
// Otherwise, Return the number itself.


function fizzbuzzUntil(num) {
    for(let i=0 ;  i<=num ; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log (i)
    }
}
}

module.exports = fizzbuzzUntil