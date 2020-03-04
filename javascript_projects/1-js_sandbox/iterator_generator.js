// Iterator Example
// iterators are like loops, but you can define where to stop
// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function () {
//             return nextIndex < names.length ? // loop the length of the array 
//                 { value: names[nextIndex++], done: false } : // count up one more index, done is false 
//                 { done: true }
//         }
//     }
// }

// // Create an array of names 
// const namesArr = ["🍒", "🍊", "🍒", "🍎", "🍌", "🍐"];
// // const namesArr = ['\u{1F351}', '\u{1F34A}', '\u{1F352}', '\u{1F34E}', '\u{1F34C}', '\u{1F350}'];
// // const namesArr = ['Misato', 'Asuka', 'Kaworu','Shinji'];
// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// Generator Example 
// functions that can return multiple values / yield values 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// function* sayNames() {
//     yield 'Misato';
//     yield 'Asuka';
//     yield 'Kaworu';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

//ID Creator
function* createIds() {
    let index = 1;
    while (true) {
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

