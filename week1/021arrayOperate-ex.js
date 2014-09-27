'use strict';

var ary = [1, 2, 3, 4, 5, 6];
console.log(ary);

push(ary, 99);
console.log(ary, '(add 99 in the end of ary)');
// [ 1, 2, 3, 4, 5, 6, 99 ]

unshift(ary, 0);
console.log(ary, '(add 0 in the start of ary)');
// [ 0, 1, 2, 3, 4, 5, 6, 99 ]

pop(ary);
console.log(ary, '(remove the last ele of ary)');
// [ 0, 1, 2, 3, 4, 5, 6 ]

shift(ary);
console.log(ary, '(remove the first ele of ary)');
// [ 1, 2, 3, 4, 5, 6 ]

insertTo(ary, 50, 2);
console.log(ary, '(add 50 at pos 2)');
//[ 1, 2, 50, 3, 4, 5, 6 ]

removeFrom(ary, 2);
console.log(ary, '(remove second ele)');
//[ 1, 2, 3, 4, 5, 6 ]

var ary2 = [7, 8, 9];
mergeArray(ary, ary2);
console.log(ary, '(merge two array)');
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] 

// add ele to the end of ary and return ary
function push(ary, ele) {

}

// add ele to the start  of ary
function unshift(ary, ele) {}

// add ele to the pos of ary
function insertTo(ary, ele, pos) {}

// remove ele from the end of ary
function pop(ary) {}

// remove ele from the start of ary
function shift(ary) {}

// remove ele from the pos of ary
function removeFrom(ary, pos) {

}

// merge ary2 to ary1
function mergeArray(ary1, ary2) {

}
