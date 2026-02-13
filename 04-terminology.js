// a();    // 'a called'
// b();    // VAR - error as b is undefined  TypeError - b is not a function 
// b();    // LET - error as b is undefined  ReferenceError - Cannot access b before initialization 

// function statement / function declaration
// function a (){
//     console.log('a called');
// }

// function expression
// var b = function(){
//     console.log('b called');
// }

// function statement vs function expression - only difference is hoisting (when a, b are called before declaring)

// ANONYMOUS FUNCTIONS - functions without names. Used when functions are used as values. Example in function expression

// NAMED FUNCTION EXPRESSION
var b = function abc(){
    console.log('b called');
    console.log(xyz);   // o/p - function def. We can access xyz inside this
}
b() // b called
// abc()   //error

// FIRST CLASS FUNCTIONS/CITIZENS - The ability to use functions as values (assigning to a variable), pass functions as parameters and return function from function 

