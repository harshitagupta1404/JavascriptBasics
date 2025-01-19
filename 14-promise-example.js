// function createOrder(){
//     let orderID = 1234
//     return orderID;
// }
// function proceedToPayment(){
    
// }

createOrder()
.then(function(orderId){
    // setTimeout(function(orderId){
    //     console.log(`har - ${orderId}`);
    //     resolve('abc');
    // },5000);
    console.log(`har - ${orderId}`);
    resolve ("Payment Success");
})
.then(function(b){
    console.log(b);
})
function createOrder(){
    const pr = new Promise(function(resolve){
        const orderID = 12345;
        console.log(orderID);
        resolve(orderID);
    })
    return pr;
}
// output - 12345 -> hello -> 12345
    
// ------------------
// createOrder()
// .then(function(orderId){
//     console.log(orderId);
// })
// .then(console.log('Hello'))


// function createOrder(){
//     const pr = new Promise(function(resolve){
//         const orderID = 12345;
//         console.log(orderID);
//         resolve(orderID);
//     })
//     return pr;
// }
// output - 12345 -> hello -> 12345

// -------------------
// createOrder()
// .then(function(orderId){
//     console.log(orderId);
// })
// .then(function(){
//     console.log('Hello');
// });

// function createOrder(){
//     const pr = new Promise(function(resolve){
//         const orderID = 12345;
//         console.log(orderID);
//         resolve(orderID);
//     })
//     return pr;
// }
    
// output - 12345 -> 12345 -> Hello
// ----------------------

