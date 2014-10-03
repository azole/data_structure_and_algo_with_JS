'use strict';

function SumWhite(n) {
  var answer = n;
  while (--n > 0) {
    answer += n;
  }
  return answer;
}


function SumRecursive(n) {
  if (n === 1)
    return n;
  else return n + SumRecursive(n - 1);
}

var num = 5;
alert(SumWhite(num));
alert(SumRecursive(num));