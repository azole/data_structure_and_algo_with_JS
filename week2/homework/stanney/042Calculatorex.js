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
//var answer = calculatePostfix(postfix);
//console.log(answer);

function convertInToPost(input) {
  var s = new Stack();
  var output = [];
  for (var i = 0; i < input.length; i++) {
    // TODO
    //  when an operand is read, output it
    //  when an operator is read:
    //  pop until the top fo the stack has lower priority
    //  push it
    //when ) is found, pop until we get the matching (
    //when we reach the end of input, pop until the stack is empty
    //數字直接存進output
    //遇到operator先存進stack 等到遇到下一個operator
    //遇到下一個opeator且priority比自己低的話，自己就pop出去存進output
    //當遇到下一個opeator是(時，不論priority先不能pop，並在遇到)之前將operator先存進stack，並遵守priority原則
    //遇到)後，將pop stack最上面的operator且存入output
    //input結束後，將stack中的operator pop 且存入output

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
