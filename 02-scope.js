// NAMASTE JAVASCRIPT (SERIES 1)

// BLOCK - group of lines used to combine multiple JS statements. We can use this wherever JS expects one statement.

// BLOCK SCOPE - variables and functions we can access within this block
// -----------------------------------
// let and const are block scope. Whereas, var is function scope or global scope (if declared outside any function).

// {
//     var a=10;       // a will be declared in global scope. Add a breakpoint on this line and check sources.
//     let b=20;       // b will be declared in block scope
//     const c=30;     // c will be declared in block scope
//     console.log(a,b,c);  // 10,20,30
// }
// -----------------------------------
// SHADOWING - redeclaring a variable in inner scope
// SHADOWING for 'var'
// var a=100;
// {
//     var a=10;       // This variable shadows a in global scope as they share the same memory space
//     let b=20;       // b will be declared in block scope
//     const c=30;     // c will be declared in block scope
//     console.log(a,b,c);     // 10,20,30
// }
// console.log(a);  // 10

// SHADOWING for 'let'
let b=100;      //It will have 'Script' scope
{
    var a=10;       // a will be declared in global scope.
    let b=20;       // b, c won't be declared until the block starts
    const c=30;     
    console.log(a,b,c);     // 10,20,30
}
console.log(b);     // 100

// NOTE - We cannot shadow let using var (Illegal Shadowing). But vice versa can be true.