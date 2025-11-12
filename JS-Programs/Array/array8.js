
// Q. Write a program to find out each and every element index position 

// Import prompt-sync package to work with prompt() in Node.js environment.
const prompt = require('prompt-sync')();


let arr = prompt('Enter the elements with separated by commas to create an array: ');
arr = arr.split(',').map(Number);

arr.forEach((ele, i) => {
    console.log(ele, i);
    
});

