/*
 * filename: app.js
 */
'use strict';
var firstName;
//no code block scope
function doSomething() {
  for (var i = 0; i < 3; i++) {
    var firstName;
  }
}

//middleName = 'AAAAA';
//console.log(middleName);
//console.log(`Middle name Is ${middleName}`);
const pi = 3.14;
//cannot assign again
let lastName;
// support code block scope

console.log('Hello CS472-WAP, welcome to JavaScript');
console.log(lastName);
lastName = 'E';
console.log(lastName);

let c = 1 + '1';
console.log(c);

//Arrays
const numbers = [];
numbers.push(1);
numbers.push(2);
numbers.push(3);
console.log(numbers);
//pop remove the last element
console.log(numbers.pop());
console.log(numbers);
//Iteration
//Imperative
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//Functional programming style
//numbers.forEach(number => console.log(number));

numbers.map(number => number * 2).forEach(doubleNum => console.log(doubleNum));
