// Optional chaining(?.) is a safe way to access nested properties without explicitly checking for null or undefined. 
// used when trying to access nested object properties and prevents runtime errors due to accessing properties of null or undefined.

// If the property to the left of ?. exists (is not null or undefined), it accesses the property on the right.
// If the property to the left of ?. is null or undefined, the expression short-circuits and immediately RETURNS UNDEFINED, without throwing an error.

const user2 = {name: "test"}
const street2 = user2?.address?.street //Safe access
console.log(street2) //Output: undefined

// Calling methods that might not exist:
obj?.myMethod?.();

// Accessing array elements that might not exist:
const element2 = myArray?.[1]

// Combining with nullish coalescing operator:
// You can combine optional chaining with the nullish coalescing operator (??) to provide a default value if the property is null or undefined:
const user = {};

const street = user?.address?.street ?? 'Unknown street';
console.log(street); // Output: 'Unknown street'

// -----------------------------
// Benefits of Optional Chaining:
// Cleaner Code: Avoids long chains of && checks or nested if statements.
// Improved Readability: Makes code easier to understand and maintain.
// Preventing Errors: Prevents runtime errors caused by accessing properties of null or undefined.
// -------------------------
// Use Cases:
// Accessing data from APIs where the structure might not always be consistent.
// Working with complex nested objects.
// Handling optional properties in objects.