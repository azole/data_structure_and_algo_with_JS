'use strict';

function Stack() {
  this.dataStore = [];
  this.top = 0;
}

Stack.prototype.push = function(elem) {
  this.dataStore[this.top++] = elem;
};

Stack.prototype.pop = function() {
  return this.dataStore[--this.top];
};

Stack.prototype.peek = function() {
  return this.dataStore[this.top - 1];
};

Stack.prototype.length = function() {
  return this.top;
};

Stack.prototype.clear = function() {
  this.top = 0;
};

Stack.prototype.show = function() {
  console.log('show:', this.dataStore.join());
};
// 運算子的priority
var priority = {
  '(': 0,
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
};

var input = '2*(3+1)/(2+2)*5';

var postfix = convertInToPost(input);
console.log(postfix);
var answer = calculatePostfix(postfix);
console.log(answer);

function convertInToPost(input) {
  var s = new Stack();
  var output = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      s.push(input[i]);
    } else if (input[i] === ')') {
      while (s.peek() !== '(') {
        output.push(s.pop());
      }
      s.pop(); // remove '('
    } else if (priority[input[i]] === undefined) {
      output.push(input[i]);
    } else {
      while (s.length() > 0 && priority[input[i]] <= priority[s.peek()]) {
        output.push(s.pop());
      }
      s.push(input[i]);
    }
  }
  while (s.length() > 0) {
    output.push(s.pop());
  }
  return output.join('');
}

function calculatePostfix(postfix) {
  var s = new Stack();
  for (var i = 0; i < postfix.length; i++) {
    if (priority[postfix[i]] === undefined) {
      s.push(parseInt(postfix[i], 10));
    } else {
      var b = s.pop();
      var a = s.pop();
      switch (postfix[i]) {
        case '+':
          s.push(a + b);
          break;
        case '-':
          s.push(a - b);
          break;
        case '*':
          s.push(a * b);
          break;
        case '/':
          s.push(a / b);
          break;
        default:
          throw new Error('Invalid Operator');
      }
    }
  }
  return s.pop();
}
