// const sayHello = function () {
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

// One line fn does not need curly braces 
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function () {
//     return 'Hello';
// }

// Return object
//const sayHello = () => ({ msg: 'Hello' });

// Single parameter does not need parenthesis 
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis 
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('A', 'B');
// sayHello();

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function (name) {
//     return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);