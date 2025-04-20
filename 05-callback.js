// CALLBACK FUNCTIONS - functions that we pass to other functions are called callback functions. These give access to asynchronous world in a synchronous single threaded language. We call this fucntion sometime later in the code.

// HIGHER ORDER FUNCTIONS - A function which takes a function as an argument or returns a function from itself.

// setTimeout(function(){
//     console.log('timer');
// },5000);

// function x(y){
//     console.log('x');
//     y();
// }
// function y is called callback function, x is called higher order function.
// x(function y(){
//     console.log('y');
// })

// o/p - x y timer

// we should always try to use async operations for functions which take time. So that our main thread is not blocked.

// EVENT LISTENER
// function addListener(){
//     let ctr = 0;
//     document.getElementById("btn").addEventListener("click", function xyz(){
//         console.log('Button clicked ',ctr);
//     })
// }
// addListener();


// NOTE - We should remove the event listeners as they are heavy and consume lot of memory
// NOTE - Callback functions which come from promises and mutation observers, come to MICROTASK queue. Other callback functions (Eg - setTimeout, Dom APIs (document.), console, fetch etc) go to callback/task queue.
// Functions in microtask queue are given more priority. Once the tasks in this queue are completed, then the tasks from callback queue will be sent to call stack.
// STARVATION - If the tasks of microtask queue keep on creating other tasks and due to which the callback queue is not able to execute its task, that is called starvation. 

// EXAMPLE CODE TO SHOW A DELAY IN TIMER (13:55)
// this doesn't work
// console.log("Start");
// setTimeout(function(){
//     console.log("timer");
// },5000);
// console.log("End");
// let start = new Date().getTime();
// let end = start;
// while (end<start+10000){
//     console.log("loop");
//     end = new Date().getTime();
//     console.log(`end:${end}`);
// }
// console.log("while expires");

// DISADVANTAGES OF CALLBACK - Callback Hell, Inversion of Control
// CALLBACK HELL - Callback inside callback inside callback...........
// INVERSION OF CONTROL - loose control of your code when using callbacks because you pass that callback function to another function and give control of the callback function to that function. Now we don't know if that function will ever execute our callback function.