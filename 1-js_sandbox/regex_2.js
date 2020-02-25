let re;
// Literal characters 
re = /hello/i;

// Metacharacter symbols
re = /^h/i; // Must start with 
re = /World$/i; // Must end with 
re = /^hello$/i; // Must begin and end with 
re = /h.llo/i; // Matches any ONE character 
re = /h*llo/i; // Matches any character 0 or more times 
re = /gre?a?y/i; // Optional character  
re = /gre?a?y\?/i; // Escape character 

// Brackets [] - Character Sets 
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/i; // Match anything except G or F 
re = /[A-Z]ray/; // Match any uppercase character 
re = /[a-z]ray/; // Match any lowercase character 
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9][0-9]ray/; // Match any digit 

// Braces {} - Quantifiers 
re = /He{2}o/i; // Must occur exactly {m} amount of times
re = /He{2,4}o/i; // Must occur exactly {m} amount of times
re = /He{2,}o/i; // Must occur at least {m} times 

// Parentheses () - Grouping 
// re = /([0-9]x){3}/;
re = /^([0-9]x){3}$/;

// Shorthand character classes
re = /\w/; // Word character - alphanumeric or _ 
re = /\w+/; // + = one or more
re = /\W/; // Word character - alphanumeric or _ 
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char 
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if Not followed by y



//String to match
const str = 'xfy';

// String to match 
// const str = 'welcome to hell';
// const str = '3x3x3x';
// const str = 'Hello';
// const str = 'Hello World';
// const str = 'Howollo';
// const str = 'Xray?';
// const str = '10ray?';
// Log results 
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);