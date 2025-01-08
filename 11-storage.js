// LOCAL STORAGE

// Go to dev tools in Browser -> Applications -> Storage
localStorage.setItem('Harshita',27);
localStorage.setItem('Harshita',27);
localStorage.setItem('Monal',29);    
console.log(localStorage.getItem('Harshita'));
console.log(localStorage.getItem('abc'));

localStorage.removeItem('Harshita');
localStorage.removeItem('abc');
localStorage.clear();   //clears the entire localStorage

// how to store an object in local storage

const user = {'name':'Harshi'};
// localStorage.setItem('user',user);  // it stores as [object Object]
localStorage.setItem('user',JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem('user')));  // we'll get an OBJECT
console.log(localStorage.getItem('user'));  // we'll get a STRING

