// CURRYING - It is a technique where a function that takes multiple arguments is transformed into a sequence of functions having 1 argument each.
// It helps creating modular and reusable functions.

function multiply(x){
    return function (y){
        return x*y;
    }
}

let multiplyByTwo = multiply(2);
const output = multiplyByTwo(5);   // second argument equivalent to y
console.log(output);