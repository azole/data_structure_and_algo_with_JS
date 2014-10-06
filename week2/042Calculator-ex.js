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

function convertInToPost(input) {
  var s = new Stack();
  var output = [];
  for (var i = 0; i < input.length; i++) {
    // TODO
  }
  // TODO
  return output.join('');
}

function calculatePostfix(postfix) {
  var s = new Stack();
  for (var i = 0; i < postfix.length; i++) {
    // TODO
  }
  return s.pop();
}
