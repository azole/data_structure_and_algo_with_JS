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
  ary[ary.length] = ele;
};

// add ele to the start of ary
function unshift(ary, ele) {
  var length = ary.length;
  for (var i = length; i > 0; i--) {
    ary[i] = ary[i - 1];
  };
  ary[0] = ele;
};

// remove ele from the end of ary
function pop(ary) {
  var length = ary.length,
    popEle = ary[length - 1];
  ary.length = length - 1;
  return popEle;
};

// remove ele from the start of ary
function shift(ary) {
  var length = ary.length - 1,
    popEle = ary[0];
  for (var i = 0; i < length; i++) {
    ary[i] = ary[i + 1];
  };
  ary.length = length;
  return popEle;
};

// add ele to the pos of ary
function insertTo(ary, ele, pos) {
  var length = ary.length;
  for (var i = length; i > pos; i--) {
    ary[i] = ary[i - 1];
  };
  ary[i] = ele;
};

// remove ele from the pos of ary
function removeFrom(ary, pos) {
  var length = ary.length,
    popEle = ary[pos];
  for (var i = pos; i < length; i++) {
    ary[i] = ary[i + 1];
  };
  // 補充: 我的方法是多個 undefined(因為最後ary(i + 1)是未定義的), 再刪除
  ary.length = length - 1;
  return popEle;
};

// 這是我的做法，給你參考一下
// function removeFrom(ary, pos) {
//   var len = ary.length - 1;
//   for (var i = pos; i < len; i++) {
//     ary[i] = ary[i + 1];
//   }
//   // 補充: 這個方法是最後兩個會有同樣的元素, 再刪除最後一個
//   ary.length = len;
// }

// merge ary2 to ary1
function mergeArray(ary1, ary2) {
  var arr1Length = ary1.length,
    arr2Length = ary2.length;
  for (var i = 0; i < arr2Length; i++) {
    ary1[arr1Length + i] = ary2[i];
  };
};
