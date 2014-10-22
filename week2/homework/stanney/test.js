var ary1 = [1, 3, 5, 7];
var ary2 = [2, 4, 6, 8];

var ary3 = ary1;
ary1 = [];
console.log(ary1, ary3);

ary3 = ary2;
ary2.length = 0;
console.log(ary2, ary3);