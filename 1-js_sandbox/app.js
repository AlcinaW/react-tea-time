// Destructuring 

let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

// console.log(c);
({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(rest);

// Array Destructuring 
// const people = ['Gin', 'Miyuki', 'Hana'];

// const [person1, person2, person3] = people;
// console.log(person1, person2, person3);

// Parse array returned from function
// function getPeople() {
//     return ['Gin', 'Miyuki', 'Hana'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// Object destructuring 
const person = {
    name: 'Yoko Taro',
    age: 55,
    city: 'Yokohama',
    gender: 'male'
}
