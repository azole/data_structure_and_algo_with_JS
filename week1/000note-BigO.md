利用這個符號來討論演算法執行的複雜度，更簡單的說，可以想成是程式執行的時間，
但不考慮各種細節，關心的是這個演算法的複雜度是常數等級，還是線性，甚至是 n^2，或 nlogn 等等。

O(1) O(logn)  O(n)  O(nlogn)  O(n^2)  O(n^3) ... O(2^n)  O(3^n) ... O(n!) ...

```
// O(1)
var result = (1+n)*n/2;
```

```
// O(n)
for(var i =1; i<n; i++) {
  // do something
}
```

```
// O(n^2)
for(var i=1;i<n;i++) {
  for(var j=1;j<h;j++) {
    // do something
  }
}
```

```
// O(3n) --> O(n)

for(var i =1; i<n; i++) {
  // do something
}
for(var j =1; j<n; j++) {
  // do something
}
for(var k =1; k<n; k++) {
  // do something
}
```