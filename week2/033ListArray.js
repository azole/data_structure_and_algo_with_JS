'use strict';

module.exports = List;

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // initializes an empty array to store list elements 
}

// Clears all elements from list
List.prototype.clear = function() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
};

// Returns string representation of list
List.prototype.toString = function() {
  return this.dataStore;
};

// Returns element at current position
List.prototype.getElement = function() {
  if(this.pos<this.listSize)
    return this.dataStore[this.pos];
};

List.prototype.find = function(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
};

// Inserts new element after existing element
List.prototype.insert = function(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
};

// Adds new element to end of list
List.prototype.append = function(element) {
  this.dataStore[this.listSize++] = element;
};

// Removes element from list
List.prototype.remove = function(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
  }
  return false;
};

// Sets current position to first element of list  
List.prototype.front = function() {
  this.pos = 0;
};

// Sets current position to last element of list 
List.prototype.end = function() {
  this.pos = this.listSize - 1;
};

// Moves current position back one element
List.prototype.prev = function() {
  if (this.pos > 0) {
    --this.pos;
  }
};

// Moves current position forward one element
List.prototype.next = function() {
  if (this.pos < this.listSize) {
    ++this.pos;
  }
};

// Returns the current position in list
List.prototype.currPos = function() {
  return this.pos;
};

// Moves the current position to specified position
List.prototype.moveTo = function(position) {
  this.pos = position;
};

List.prototype.length = function() {
  return this.listSize;
};
