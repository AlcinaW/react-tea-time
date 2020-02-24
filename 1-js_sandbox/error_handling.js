const user = { email: 'jdoe@gmail.com' };

// try catch is an elegant way of handling errors 
try {
    // Produce a ReferenceError
    // myFunction();

    //Produce a TypeError
    // can't call something from null, will cause a type error
    // null.myFunction();

    // Will product SyntaxError
    // if it was eval('"Hello World"') as a string, there is no error
    // eval('Hello World')

    // Will produce a URIError
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
    // decodeURIComponent('%');

    if (!user.name) {
        // throw `User has no name`;
        throw new SyntaxError('User has no name');
    }
} catch (e) {
    console.log(`User Error: ${e.message}`);
    console.log(e);
    //console.log(`${e.name}: It's null!!! NUOOOO`);
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
    // console.log(e instanceof TypeError);
} finally {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
    console.log('Finally runs regardless of result...');
}

console.log('Program continues...');