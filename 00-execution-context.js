// Same this happends in let and var. Only the scope is different. In case of var, the value is undefined. In case of let, the value is shown as unavailable.

// uncomment line 4 to understand Temporal Dead Zone (time between when let or const variables/functions are hoisted, till it is initialized).
// console.log(n);
let n=2;
function sq(num){
    let ans = num*num;
    return ans;
}
// {
//     let abc=5;
// }
let sq2=sq(2);
let sq4=sq(4);
console.log(sq2,sq4);

// var n=2;
// function sq(num){
//     var ans = num*num;
//     return ans;
// }
// var sq2=sq(2);
// var sq4=sq(4);
// console.log(sq2,sq4);