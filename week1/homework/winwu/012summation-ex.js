'use strict';

function summationWhile(n) {
   var answer = n;
   while (--n > 0) {
     answer += n;
   }
   return answer;
}


function summationRecursive(n) {
  //(1+n)*n/2;
  if (n === 1) {
     return n;
  } else {
    return n+summationRecursive(n-1);
  }
}

var testCase = 5;
console.log(summationWhile(testCase), summationRecursive(testCase));
