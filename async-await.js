// ASYNC ALWAYS RETURNS A PROMISE
// If we give a normal value (non promise), then it will wrap it in a promise and return a promise.

// returning a value from async function
// async function getData(){
//     return "Harshita";
// }
// const dataPromise = getData();
// console.log(dataPromise);

// // extracting data from promise
// dataPromise.then(res => console.log(res));

// // returning a promise from async function
// let p = new Promise((resolve,reject) => {
//     resolve("Promise resolved");
// })
// p.then(res => console.log(res));

// -----------------------------------
// ASYNC and AWAIT are used to handle promises
// AWAIT CAN ONLY BE USED INSIDE AN ASYNC FUNCTION

// Handling a promise using .then vs async await
// .then (line 15-18)
// using async await

// async function handlePromise() {
//     let res = await p;
//     console.log(res);
// }
// handlePromise();

// -------------------------------------------
// Implementation difference between .then and async await
// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promise resolved');
//     },5000);
// })

// function getData(){
//     // NOTE - JS engine won't wait for the promise to resolve.
//     p.then(res=>console.log(`res = ${res}`));
//     console.log('Harshita');
// }
// getData();  // output - Harshita -> after 5 secs (Promise resolved)

// async function handlePromise(){
//     console.log('Start');
//     // NOTE - JS engine will wait for the promise to be resolved
//     let res = await p;
//     console.log(`res = ${res}`);
//     console.log('end');
// }
// handlePromise(); // output - Start -> after 5 secs (Promise resolved -> end)
// -------------------------------------------
// Multiple awaits in a function - Scenario 1
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promise resolved');
//     },5000);
// })
// async function handlePromise(){
//     console.log('Start');
//     let res1 = await p1;
//     console.log(`res1 = ${res1}`);
//     console.log('end');

//     let res2 = await p1;
//     console.log(`res2 = ${res2}`);
//     console.log('end');
// }
// handlePromise();    // output - Start -> after 5 secs (res1 = Promise reolved -> end -> res2 = Promise resolved -> end)
// ------------------------------------------
// Multiple awaits in a function - Scenario 2
// const p1 = new Promise(resolve => {
//     setTimeout(()=>{
//         resolve('Promise resolved');
//     },10000)
// })
// const p2 = new Promise(resolve => {
//     setTimeout(()=>{
//         resolve('Promise resolved');
//     },5000)
// })
// async function handlePromise(){
//     console.log('Start');
//     let res1 = await p1;
//     console.log(`res1 = ${res1}`);
//     console.log('end');

//     let res2 = await p2;
//     console.log(`res2 = ${res2}`);
//     console.log('end');
// }
// handlePromise();    // output - Start -> after 10 secs (res1 -> end -> res2 -> end)
// ------------------------------------------
// Multiple awaits in a function - Scenario 3
// const p1 = new Promise(resolve => {
//     setTimeout(()=>{
//         resolve('Promise resolved');
//     },5000)
// })
// const p2 = new Promise(resolve => {
//     setTimeout(()=>{
//         resolve('Promise resolved');
//     },10000)
// })
// async function handlePromise(){
//     console.log('Start');
//     let res1 = await p1;
//     console.log(`res1 = ${res1}`);
//     console.log('end');

//     let res2 = await p2;
//     console.log(`res2 = ${res2}`);
//     console.log('end');
// }
// handlePromise();    // output - Start -> after 5 secs (res1 -> end) -> after 5 more secs/10secs (res2 -> end)
// ----------------------------------------
// Real world example of async await
const API_URL = "https://api.github.com/users/harshitagupta1404/repos";
async function handlePromise(){
    try{
        // fetch returns a promise with response which is a readable stream
        const data = await fetch(API_URL);
        // data.json is again a promise
        const jsonValue = await data.json();
        console.log(jsonValue);
        // using .then
        // fetch(API_URL).then(res=>res.json()).then(res=>console.log(res));
    }
    catch(err){
        console.log(`err=${err}`);
    }
}
handlePromise();

