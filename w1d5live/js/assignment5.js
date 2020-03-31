/*This is Assignment 5 javascript file */
'use strict';
//Problem1
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log('P1: ' + max(10, 20));
//Problem2
function maxOfThree(first, second, third) {
  let max = first;
  if (second > max) {
    max = second;
  }
  if (third > max) {
    max = third;
  }
  return max;
}
console.log('P2: ' + maxOfThree(3, 6, 9));

//Problem3
function isVowel(vowel) {
  if (typeof vowel === 'string') {
    if (vowel.length === 1) {
      return true;
    }
  }
  return false;
}
console.log('P3: ' + isVowel('A'));

//Problem4
function sum(itemArray) {
  let output = 0;
  if (Array.isArray(itemArray)) {
    for (let i = 0; i < itemArray.length; i++) {
      output = output + itemArray[i];
    }
  }
  return output;
}
function multiply(itemArray) {
  let result = 1;
  if (Array.isArray(itemArray)) {
    for (let i = 0; i < itemArray.length; i++) {
      result = result * itemArray[i];
    }
  }
  return result;
}
const p4 = [1, 2, 3, 4, 5];
console.log('P4: sum: ' + sum(p4) + ', multiply: ' + multiply(p4));
//Problem5
function reverse(word) {
  let output = new String();
  for (let i = word.length - 1; i >= 0; i--) {
    output += word[i];
  }
  return output;
}
const p5 = 'Hello World!';
console.log('P5: ' + reverse(p5));
//Problem6
function findLongestWord(wordArray) {
  let maxLength = 0;
  for (let i = 0; i < wordArray.length; i++) {
    let temp = wordArray[i].length;
    if (temp > maxLength) {
      maxLength = temp;
    }
  }
  return maxLength;
}
const p6 = ['world', 'work', 'wonder', 'wonderful', 'wool'];
console.log('P6: ' + findLongestWord(p6));

//Problem7
function filterLongWords(wordArray, filterLength) {
  const result = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > filterLength) {
      result.push(wordArray[i]);
    }
  }
  return result;
}
const p7 = ['car', 'cart', 'card', 'cartoon', 'cartboard', 'cat'];
console.log('P7: ' + filterLongWords(p7, 3));

//Problem8
function computeSumOfSquares(intArray) {
  const squaresArray = intArray.map(a => a * a, 0);
  const sum = squaresArray.reduce((a, b) => a + b);
  return sum;
}
const p8 = [1, 2, 3, 4];
console.log('P8: ' + computeSumOfSquares(p8));

//Problem9
function printOddNumbersOnly(intArray) {
  return intArray.filter(element => element % 2 !== 0);
}
const p9 = [1, 2, 3, 4, 5];
console.log('P9: ' + printOddNumbersOnly(p9));

//Problem10
function computeSumOfSquaresOfEvensOnly(intArray) {
  const evens = intArray.filter(element => element % 2 == 0);
  const squares = evens.map(a => a * a);
  const sum = squares.reduce((a, b) => a + b);
  return sum;
}
const p10 = [1, 2, 3, 4, 5];
console.log('P10: ' + computeSumOfSquaresOfEvensOnly(p10));

//Problem11
function multiply2(intArray) {
  return intArray.reduce((a, b) => a * b);
}

function sum2(intArray) {
  return intArray.reduce((a, b) => a + b);
}
const p11 = [1, 2, 3, 4, 5];
console.log('P11: multiply: ' + multiply2(p11) + ', sum: ' + sum2(p11));

//Problem12
function findSecondBiggest(intArray) {
  let max = 0;
  let secondMax = 0;
  for (let i = 1; i < intArray.length; i++) {
    if (intArray.length <= 1) {
      return intArray[0];
    }
    if (intArray[i] > max) {
      max = intArray[i - 1];
      secondMax = intArray[i];
    }

    if (secondMax > max) {
      let temp = secondMax;
      secondMax = max;
      max = temp;
    }
  }
  return secondMax;
}
const p12 = [1, 2, 30, 4, -1];
console.log('P12: ' + findSecondBiggest(p12));

//Problem13
function printFibo(n, a, b) {
  const fibo = [];
  fibo.push(a);
  fibo.push(b);
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
console.log('P13: ' + printFibo(10, 0, 1));
