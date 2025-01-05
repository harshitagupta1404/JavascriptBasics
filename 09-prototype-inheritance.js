// INHERITANCE IN JS - 1 object trying to access methods and properties of other object.

// PROTOTYPE - An object that is attached to each and every method/array/funcion/object we create in JS

// PROTOTYPE CHAINING IN ARRAYS
let arr = [];
console.log(arr.__proto__);    // this is also an object and will have a prototype
console.log(Array.prototype);    // same as arr.__proto__
console.log(arr.__proto__.__proto__);    // This is an object which is equivalent to Object.prototype 
console.log(Object.prototype);      // prototype of this is null
console.log(arr.__proto__.__proto__.__proto__);     // null

// PROTOTYPE CHAINING IN OBJECTS
let obj = {};
console.log(obj.__proto__);
console.log(Object.prototype);      // same as obj.__proto__
console.log(obj.__proto__.__proto__);      // null

// PROTOTYPE CHAINING IN FUNCTIONS
function fun(){}
console.log(fun.__proto__);
console.log(Function.prototype);    // same as fun.__proto__
console.log(fun.__proto__.__proto__)    // same as Object.prototype
console.log(Object.prototype);

// NOTE - You should not modify the prototype. It causes huge performance issues