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
// azole: don't need count, you can use i to replace it.
function push(ary, ele) {
   var newAry = [];
   var count = 0;
   for (var i = 0 ; i < ary.length; i++) {
      newAry[i] = ary[i];
      count++;
   }
   newAry[count+1] = ele;
   return newAry;
}

// add ele to the start  of ary
function unshift(ary, ele) {
  var newAry = [];
  newAry[0] = ele;

  for(var i = 0; i< ary.length; i++) {
     newAry[i+1] = ary[i];
  }

  return newAry;
}

// add ele to the pos of ary
// azole: please refer to Yulin's work
function insertTo(ary, ele, pos) {
  var newAry = [];
  var hadEncounterPos = false;
  for (var i = 0 ; i < ary.length + 1; i++) {
    if (i == pos){
       hadEncounterPos = true;
       newAry[i] = ele;
    } else {
      if (hadEncounterPos) {
        newAry[i] = ary[i- 1];
      } else {
        newAry[i] = ary[i];
      }
    }
  }
  return newAry;
}

// remove ele from the end of ary
function pop(ary) {
  var newAry = [];
  for(var i = 0 ; i < ary.length-1 ; i++){
      newAry[i] = ary[i];
  }
  return newAry;
}

// remove ele from the start of ary
function shift(ary) {
  var newAry = [];
  for(var i = 0 ; i < ary.length-1 ; i++){
      newAry[i] = ary[i+1];
  }
  return newAry;
}

// remove ele from the pos of ary
function removeFrom(ary, pos) {
  var newAry = [];
  var hadEncounterPos = false;
  for (var i = 0 ; i < ary.length -1 ; i++) {
    if (i == pos){
       hadEncounterPos = true;
       newAry[i] = ary[i + 1];
    } else {
      if (hadEncounterPos) {
        newAry[i] = ary[i + 1];
      } else {
        newAry[i] = ary[i];
      }
    }
  }
  return newAry;
}

// merge ary2 to ary1
function mergeArray(ary1, ary2) {
  var ary1Max = ary1.length;
  for(var i = 0 ;  i < ary2.length; i++) {
     ary1[ary1Max+i] = ary2[i];
  }
  return ary1;
}
