// PROMISE - is an object which represents eventual completion of an async operation.

// const API_URL = "https://api.github.com/users/harshitagupta1404/repos";
// const user = fetch(API_URL);
// console.log(user);

// Promise state shows current state of the object. In this case, the promise shows pending while the promise state is fulfilled. This is because when this was logged the promise was pending and when you expand, it shows the current state of the promise
// *** Body in Promise result is a readable stream

// user.then(data => {console.log(data)
//     console.log(`body = ${data.body}`);
//     data.body = 'Harshita';
//     console.log(`body2 = ${data.body}`);
//     ;
// });

// 3 states in a promise - Pending, Fulfilled, Rejected

// NOTE - Promise objects are immutable

// Prmomise chaining - One imp thing to be noted is to return the function/promise while doing promise chaining. Otherwise we might lose some data in the promise chain.

// creating a promise
function handlePromise(){
    const p = new Promise(function(resolve,reject){
        // setTimeout(()=>{
        //     console.log(p);
        //     reject("resolve");
        // },5000);
        resolve('sm');
    });
    console.log(p);
}
const res = handlePromise();
console.log(res);
// res.then(()=>console.log('output'));

// NOTE - If we have a promise chain like then -> then -> then -> catch -> then
// No matter what, the last then will be called. Even if the flow goes to catch, it will run next then
// We attach a failure callback to our promise object using catch.


// INTERVIEW - What is a promise? Why do you use it?
// Promises are objects which represent the ventual completion of an async operations. It has 3 states - ..
// Before promises we used to use callbacks which caused problems like callback hell and inversion of control.
// Inversion of control is handled using prmoises and callback hell can be controlled using promise chaining.