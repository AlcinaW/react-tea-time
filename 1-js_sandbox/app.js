// Iterator Example
// iterators are like loops, but you can define where to stop
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < name.length ? // loop the length of the array 
                { value: names[nextIndex++], done: false } : // count up one more index, done is false 
                { done: true }
        }
    }
}

// Create an array of names 
const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

//Generator Example 

