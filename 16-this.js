// FUNCTION AS PART OF AN OBJECT IS CALLED A METHOD

// This keyword works differently in strict and non-strict mode.

// console.log(this);  //window

// function abc(){
//     console.log(this);  // window in non strict, undefined in strict
// }

// if the value of this keyword is undefined or null, then it will be replaced by globalObject in non strict mode

// -------------------
// value of this in call, apply, bind

// let obj1 = {
//     name : 'Harshita',
//     printName : function() {console.log(this.name)},
// }

// let obj2 = {
//     name : 'Saksham'
// }

// obj1.printName.call(obj2);
// obj1.printName.apply(obj2);
// let res = obj1.printName.bind(obj2);
// res();
// ------------------------

// This in arrow functions
// Arrow functions don't have their own 'this'. They take 'this' from their enclosing lexical context.

// let obj1 = {
//     name:'Harshita',
//     printName : () => console.log(this),     // window
// }

// let obj2 = {
//     name:'Saksham',
// }

// obj1.printName(obj2);   

let obj1 = {
    name:'Harshita',
    printName : function(){
        const abc = () => console.log(this.name)    // this = obj1, this.name=Harshita
        abc();
    },
}

let obj2 = {
    name:'Saksham',
}

obj1.printName(obj2);

// -----------------------------
// 'this' in DOM element -> refernce the HTMLElement
// <button onClick = "alert(this)">Click Me </button>