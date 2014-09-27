'use strict';

function factorialWhile(n) {
  var answer = n;
  while (--n > 0) {
    answer *= n;
  }
  return answer;
}


function factorialRecursive(n) {
  if (n === 1)
    return n;
  else return n * factorialRecursive(n - 1);
}

var testCase = 5;
console.log(factorialWhile(testCase), factorialRecursive(testCase));

