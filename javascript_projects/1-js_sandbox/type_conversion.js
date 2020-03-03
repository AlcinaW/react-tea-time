let val;

// Number to string
val = String(555);
val = String(4 + 4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');

val = parseInt('100.01'); // can't take decimals
val = parseFloat('100.30'); // shows decimals, can fix it with toFixed

// Output
// console.log(val);
// console.log(typeof val);
// only works on strings
// console.log(val.length);
// only works on numbers
console.log(val.toFixed(3));
// NaN - not a number

// Type coercion
// adding different types together
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);



