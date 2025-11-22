// Shallow copy - copies only top level values. Nested objects still have memory reference of main object

const user = {
  name: "Harshita",
  address: {
    city: "Delhi",
    zip: 110001
  }
};

const shallowCopy = { ...user };  // OR Object.assign({}, user)
shallowCopy.address.city = "Mumbai";
console.log(user.address.city); // "Mumbai" ❌ changed

// Deep copy - copies everything including nested objects

const user = {
  name: "Harshita",
  address: {
    city: "Delhi",
    zip: 110001
  }
};
const deepCopy = structuredClone(user);
// OR JSON.parse(JSON.stringify(user))  (older approach)

deepCopy.address.city = "Mumbai";
console.log(user.address.city); // "Delhi" ✔ unaffected

