// Log to console
// Primitive 

// String
const name = 'JJ style';
// Number 
const age = 35;
// Boolean
const hasSnacks = true;
// Null - cannot be used with typeof to check, because it will return as an object, but in reality a primitive
const car = null;
// Undefined - has not been assigned a value yet
let test;
// Symbol
const sym = Symbol();

// Reference Types - Objects
// Array 
const hobbies = ['anime', 'games'];
// Object literal
const literal = {
    city: 'Boston',
    state: 'MA'
}
// Dates
const today = new Date();
console.log(today);

console.log(typeof today);

