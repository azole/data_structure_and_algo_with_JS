'use strict';

var ary = [1, 2, 3, 4, 5, 6];
console.log(ary);

ary = push(ary, 99);
console.log(ary, '(add 99 in the end of ary)'); 
printAry(ary);
// [ 1, 2, 3, 4, 5, 6, 99 ]

ary =unshift(ary, 0);
console.log(ary, '(add 0 in the start of ary)');
printAry(ary);
// [ 0, 1, 2, 3, 4, 5, 6, 99 ]

ary = pop(ary);
console.log(ary, '(remove the last ele of ary)');
printAry(ary);
// [ 0, 1, 2, 3, 4, 5, 6 ]

ary = shift(ary);
console.log(ary, '(remove the first ele of ary)');
printAry(ary);
// [ 1, 2, 3, 4, 5, 6 ]

ary = insertTo(ary, 50, 2);
console.log(ary, '(add 50 at pos 2)');
printAry(ary);
//[ 1, 2, 50, 3, 4, 5, 6 ]

ary = removeFrom(ary, 2);
console.log(ary, '(remove second ele)');
//printAry(ary);
//[ 1, 2, 3, 4, 5, 6 ]

var ary2 = [7, 8, 9];
ary = mergeArray(ary, ary2);
console.log(ary, '(merge two array)');
printAry(ary);

//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] 

// add ele to the end of ary and return ary
function push(ary, ele) {
    //create a temp array
    var tmpAry = [];
    //put the ary element into temp array
    for(var i = 0; i < ary.length; i++)
        tmpAry[i] = ary[i];
    //add the ele into the end of temp array
    tmpAry[ary.length] = ele; 
    
    return tmpAry;
}

// add ele to the start  of ary
function unshift(ary, ele) {
    //create a temp array
    var tmpAry = [];
    //put the ary element into temp array
    for(var i = 1; i <= ary.length; i++)
        tmpAry[i] = ary[i-1];
    //add ele in the front of temp array
    tmpAry[0] = ele; 
    
    return tmpAry;
}

// add ele to the pos of ary
function insertTo(ary, ele, pos) {
  // TODO
    //create two array
    var tmpary1 = [];
    var tmpary2 = [];
    
    //add the element which index before pos into ary1
    for(var i = 0; i < pos; i++)
        tmpary1[i] = ary[i];

    //add ele into the end of ary1
    tmpary1 = push(tmpary1, ele);
    
    //add the element which index after pos into ary2
    for(var i = 0; i <ary.length - pos; i++)
        tmpary2[i] = ary[ pos + i];
    
    return mergeArray(tmpary1, tmpary2);
}

// remove ele from the end of ary
function pop(ary) {
  // TODO
    //create temp array 
    var tmpAry = [];
    //add the all element in the ary except the last one
    for(var i = 0; i < ary.length - 1; i++)
        tmpAry[i] = ary[i];
    
    return tmpAry;
}

// remove ele from the start of ary
function shift(ary) {
  // TODO
    //create temp array 
    var tmpAry = [];
    //add the all element in the ary except the first one
    for(var i = 1; i < ary.length; i++)
        tmpAry[i - 1] = ary[i];
    
    return tmpAry;
}

// remove ele from the pos of ary
function removeFrom(ary, pos) {
  // TODO
    //create temp array 
    var tmpAry = [];
    var count = 0;
    
    //add the element which index before pos into ary1
    for(var i = 0; i < pos; i++)
    {
        tmpAry[i] = ary[i];
        count++;
    }
    
    //add the element which index after pos into ary2
    for(count;count < ary.length - 1;count++)
        tmpAry[count] = ary[count+1];
    
    return tmpAry;
}

// merge ary2 to ary1
function mergeArray(ary1, ary2) {
    
    //create the merge array
    var mergeAry = [];
    //record how much element have been added
    var count = 0;    
    
    var totalLength = ary1.length + ary2.length;
    //add ary1,ary2 element into merge array
    //first array
    for(var i = 0; i < ary1.length; i++)
    {
        mergeAry[i] = ary1[i];
        count++;
    }
    
    //second array
    for(var j = 0; j < ary2.length; j++)
        mergeAry[count + j] = ary2[j];
    
    return mergeAry;
}

function printAry(ary){
    for(var i = 0; i < ary.length; i++)
        alert(ary[i]);
        //console.log(ary[i]);
}
