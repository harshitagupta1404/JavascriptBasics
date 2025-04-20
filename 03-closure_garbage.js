// CLOSURE - function along with its lexical scope (reference to it's outer/heirarchical environment)
// In JS, functions have access to variables and functions which are present in the environment of its parent. Even if function is executed in some other scope, it still remembers the functions and variables in its outer lexical environment where it was originally present.

function outer(){
    let a =10;
    function inner(){
        console.log(a);
    }
    return inner;
}

outer()();

// ADVANTAGES OF CLOSURE
// -- used in data hiding and encapsulation
// let ctr = 0;
// function incrementCounter(){
//     ctr++;
// }
// anyone in our code can access ctr. Hence, we can hide this variable using closure.
function counter(){
    let ctr = 0;
    return function incrementCounter() {
        console.log(ctr++) ;   
    }
}
// console.log(ctr);  // we can't access it from outside the function
let count1 = counter();
count1();
count1();

let count2 = counter(); //it will create a fresh copy of counter, having a different closure and memory space
count2();

// DISADVANTAGES OF CLOSURE
// -- closure consumes a lot of memory. There could be over-consumption of memory as those variables are not garbage collected till the program expires. If not handled properly, it can lead to memory leaks. It can freeze the browser, if not handled properly.

// GARBAGE COLLECTION - JS is a high level language. Hence, JS engine has something called garbage collector. It frees up all the memory which is not in use. Uses mark and sweep technique.

// GARBAGE COLLECTOR AND CLOSURES
// function abc(){
//     let a = 10;
//     return function xyz(){
//         console.log(a);
//     }
// }
// let def = abc();
// now this def can be used anywhere and it will use the reference of a. Hence, we cnnot free the memory for a.