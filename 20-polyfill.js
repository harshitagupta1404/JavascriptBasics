// ---------------
// NORMAL BIND FUNCTIONALITY
const name = {
    'first':'Harshita',
    'last': 'Gupta'
}

function printName(city,state){
    console.log(`${this.first}, ${this.last}, ${city}, ${state}`);
}

// printMyName = printName.bind(name);
// printMyName('pkl');

// --------
// POLYFILL OF BIND - https://dev.to/uddeshjain/creating-your-own-bind-polyfill-of-bind-433j

Function.prototype.myBind = function(obj,...args) {
    let func=this;
    return function(...newArgs) {
        console.log(`${args},${newArgs}`);
        func.apply(obj,[...args,...newArgs]);
    }
}

let printBindName = printName.myBind(name,'pkl');
printBindName('hry');

// --------
// POLYFILL FOR MAP - It cannot be written using arrow functions as these functions don't have a reference of this.
// Array.prototype.myMap=function(callback){
//     let res=[];
//     for(let i=0;i<this.length;i++){
//         res.push(callback(this[i],i,this));
//     }
//     return res;
// }

// let arr=[1,2,3,4,5];
// let temp=arr.myMap(x=>x*2);
// console.log(temp);

// --------
// POLYFILL FOR FILTER
// Array.prototype.myFilter=function(callback){
//     let res=[];
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i],i,this))
//             res.push(this[i]);
//     }
//     return res;
// }

// let arr=[1,2,3,4,5];
// let temp=arr.myFilter(x=>x<5);
// console.log(temp);

// --------
// POLYFILL FOR REDUCE
// Array.prototype.myReduce=function(fn,initial){
//     let acc=initial;
//     for(let i=0;i<this.length;i++){
//         acc=acc?fn(acc,this[i],i,this):this[i];
//     }
//     return acc;
// }

// let arr=[1,2,3,4,5];
// let temp=arr.myReduce((acc,curr)=>{
//     acc+=curr;
//     return acc;
// })
// console.log(temp); 

