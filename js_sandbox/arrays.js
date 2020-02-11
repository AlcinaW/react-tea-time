// Create some arrays 
const numbers = [43, 56, 55, 77, 2, 5];
const numbers2 = new Array(44, 66, 77, 8, 9);
// Arrays Can be strings or numbers or mixed
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// console.log(mixed);

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value 
val = numbers[3];
val = numbers[0];
//Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// // MUTATING ARRAYS
// // Add on to the end 
// numbers.push(250);
// // Add to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1, 3);
// // Reverse 
// numbers.reverse();

// Concat array
val = numbers.concat(numbers2);

// Sorting Arrays
val = fruit.sort();
//val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function (x, y) {
//     return x - y;
// });

// // Reverse sort 
// val = numbers.sort(function (x, y) {
//     return y - x;
// });

// Find 
function under50(num) {
    return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
