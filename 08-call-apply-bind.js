let name1 = {
    firstName:'Harshita',
    lastName:'Gupta',
}
let name2 = {
    firstName:'Monal',
    lastName:'Jain',
}

let printFullName = function(city,state){
    console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
}

// CALL function we pass the comma separated arguments
printFullName.call(name1, 'Hyderabad', 'Telangana');
printFullName.call(name2, 'Panchkula', 'Haryana');

// APPLY method we pass arguments as an array
printFullName.apply(name1, ['Hyderabad', 'Telangana']);
printFullName.apply(name2, ['Panchkula']);

// BIND method creates a copy of the function and returns it so that it can be called later
printMyName = printFullName.bind(name1, 'Hyderabad', 'Telangana');
console.log(printMyName);

printMyName();