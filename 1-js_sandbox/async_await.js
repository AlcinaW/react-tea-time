// async function myFunction() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const error = false;

//     if (!error) {
//         const response = await promise; //wait until promise is resolved
//         return response;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
// }

// myFunction()
//     .then(response => console.log(response))
//     .catch(error = console.log(error));

// const hello = async () => 'hello';
// console.log(hello());

// Fetch 
async function getUsers() {
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only process once its resolved
    const data = await response.json();

    // Only proceed once second promise is resolved 
    return data;
}

getUsers().then(users => console.log(users));