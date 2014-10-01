'use strict';

function summationWhile(n) {
  var result = n;
  while (--n > 0) {
    result += n;
  };
  return result;
};


function summationRecursive(n) {
  if (n === 1) {
    return n;
  };
  return n + summationRecursive(n-1);
};

var testCase = 5;
console.log(summationWhile(testCase), summationRecursive(testCase));
