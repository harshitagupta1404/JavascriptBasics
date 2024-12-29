// Map, filter, freduce are higher order functions.

// MAP - used to transform the whole array
const arr = [1,2,3,4,5];
// const arr = [1,2,3,4,5,19,3,56,11,90,6,7,8];

// function double(x){
//     return x*2;
// }
// const output = arr.map(double);
// console.log(output);

// FILTER - Filters the values from an array

// function isOdd(x){
//     return x%2;
// }
// const output = arr.filter(isOdd);
// console.log(output);

// REDUCE - take all the values of an array and come back with a single value like sum or find largest or smallest element
// Traditional way to find sum of all elements
// function findSum(arr){
//     let sum=0;
//     for (i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));

// Find sum using reduce function

// const output_sum = arr.reduce(function(accumulator, current){
//     accumulator+=current;
//     return accumulator;
// },0);
// // 0 is the initial value of accumulator
// console.log(output_sum);

// ------------------------------------
// Find max using reduce function
// const output_max = arr.reduce(function(max,curr){
//     console.log(max,curr);
//     if(curr>max){
//         max=curr;
//     }
//     return max;
// },0);
// console.log(output_max);

// ---------------------------------------
// PRACTICE - find how many users have a particular age
const users = [
    {firstName:'Shiyam',lastName:'Soman',age:'26'},
    {firstName:'Harshita',lastName:'Gupta',age:'27'},
    {firstName:'Shreyash',lastName:'Koranne',age:'26'},
    {firstName:'Shruti',lastName:'Nanda',age:'29'},
    {firstName:'Roushan',lastName:'Shankar',age:'29'},
    {firstName:'Subhashish',lastName:'Behera',age:'25'},
];
// Expected Result - {26:2, 27:1, 29:2, 25:1}
const output = users.reduce(function(acc,curr){
    // console.log(`acc=${JSON.stringify(acc)}`);
    // console.log(`curr=${JSON.stringify(curr)}`);
    if(acc[curr.age]){
        // console.log(`if ${acc[curr.age]}`);
        acc[curr.age]+=1;
    }
    else{
        // console.log(`else ${acc[curr.age]}`);
        acc[curr.age]=1;
    }
    return acc;
},{});
// console.log(output);

// find list of all users having age < 27
const filtered = users.filter(x => x.age<27).map(x => x.firstName+" "+x.lastName);
// console.log(filtered);

// find list of all users having age < 27 using reduce
const names=users.reduce((acc,curr)=>{
    if (curr.age<27) acc.push(curr.firstName);
    return acc;
},[]);
console.log(names);