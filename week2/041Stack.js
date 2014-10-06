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
