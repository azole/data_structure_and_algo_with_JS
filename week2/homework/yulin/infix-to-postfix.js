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

// 運算子的priority
var priority = {
  '(': 0,
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
};


// 假設使用者都會乖乖地輸入整數、加減乘除與()，不會有這些以外的字元。
var input = '2*(3+1)';
var postfix = convertInToPost(input);
console.log(postfix);
var answer = calculatePostfix(postfix);
console.log(answer);
console.log('驗證: ', 2 * (3 + 1));

var input2 = '2*(3+1)/(2+2)*5';
var postfix2 = convertInToPost(input2);
console.log(postfix2);
var answer2 = calculatePostfix(postfix2);
console.log(answer2);
console.log('驗證: ', 2 * (3 + 1) / (2 + 2) * 5);

function convertInToPost(input) {
  var s = new Stack();
  var output = [];
  for (var i = 0; i < input.length; i++) {
    // 跑第一次序列
    switch (input[i]) {
      case '(':
        // 特殊處理: 儘管丟
        s.push(input[i]);
        break;
      case ')':
        // 特殊處理: 一直拔, 直到遇到另一半
        while (s.peek() !== '(')
          output.push(s.pop());
        s.pop();
        break;
      case '*':
      case '/':
      case '+':
      case '-':
        if (s.length === 0) {
          // 空的就直接丟
          s.push(input[i]);
        } else {
          // 先偷看, 一直拔一直拔一直拔, 拔到比我小就停(或是拔到空)
          while (priority[s.peek()] >= priority[input[i]])
            output.push(s.pop());
        }
        if (s.length === 0)
          break;
        s.push(input[i]);
        break;
      default:
        output.push(input[i]);
    };
  }
  // 把 stack 東西都拿出
  while (s.length() > 0)
    output.push(s.pop());
  return output.join('');
}

function calculatePostfix(postfix) {
  var s = new Stack(),
    secondNum;
  for (var i = 0; i < postfix.length; i++) {
    // 如果是運算元就先做四則運算, 否則就直接存數字
    switch (postfix[i]) {
      case '+':
        secondNum = +s.pop();
        s.push(+s.pop() + secondNum);
        break;
      case '-':
        secondNum = +s.pop();
        s.push(+s.pop() - secondNum);
        break;
      case '*':
        secondNum = +s.pop();
        s.push(+s.pop() * secondNum);
        break;
      case '/':
        secondNum = +s.pop();
        s.push(+s.pop() / secondNum);
        break;
      default:
        s.push(postfix[i]);
    };
  }
  return s.pop();
}
