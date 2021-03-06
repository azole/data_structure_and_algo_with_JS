
一般對 array 的定義是：array 是一個線性的資料集合，資料可以用 index 來存取，index 通常是數字，可以用來計算偏移量。   
Q. 偏移量？   
   
但 js 中的陣列是一種很特殊的陣列，他的 index 是屬性名稱，雖然也能是數字，一樣是表示偏移量。   
   
但其實，當用數字來當 index 時，底層其實會把這個數字轉成字串，因為，其實在 js 中陣列是一種物件(會有屬性跟方法)，也因此，js 中的陣列並不如其它語言中的陣列來得有效率。   

```
var ary = ['apple', 'banna'];
console.log(ary[1], ary['1'])
// banna banna
```

這邊補充一下 Douglas Crockford 的 The Good Parts 中對 js 陣列的描述：   
中文版 第 6 章 page 59

>陣列是記憶體的一種線性分配，其中的組件根據計算偏移量(整數)而存取。陣列可以是非常快速的資料結構。但很可惜，JavaScript 沒有類似陣列的東西。   
>      
>JavaScript 提供了類似陣列性格的物件。它把陣列註標 (subscript 下標，或稱索引[index])轉換成字串。比實際的陣列慢，但更方便使用。特性的擷取與更新，與使用物件時相同，只不過多了利用整數特性名稱的特殊訣竅。


js 的 array 還有一點跟其他語言很不一樣，js 的 array 裡頭可以放各種不同型態的資料。   
另外，也因為是物件，所以 js 的 array 沒有容量的限制，不像其他語言(C, C++, Java, C#,...，)在宣告的時候，就要決定陣列的大小，之後也很難修改。   
   
Q.為什麼其他語言不行呢？   
   
<hr>

這邊利用 array 講一下 shallow copy 與 deep copy。   
```
var ary1 = ['apple', 'google', 'microsoft'];
var ary2 = ary1;
ary1[0] = 'jobs';
console.log(ary2[0]);
```
這邊修改的是 ary1，但 ary2[0] 印出來的結果也是 jobs，而不是原來的 apple，為什麼？   
   
--> 因為這邊指派的是「參考」reference   
ary1 與 ary2 參考的會是記憶體中同一塊區域，所以不管是透過 ary1 或 ary2 去修改，用另外一個變數來存取，都會看到修改後的結果。   
   
如果要讓這個指派的動作是真的複製一份新的資料，必須要自己做：
```
function copy(arr1, arr2) {
  for (var i = 0; i < arr1.length; ++i) {
    arr2[i] = arr1[i];
  }
}
```

<hr>
在 js 中，push 是加元素到陣列的最後面，unshift 是加元素到陣列的開頭，splice 可以在陣列中間添加一個元素。   
   
現在假設沒有 push, unshift 這些函式，請你自己實作添加一個元素到陣列的開頭、中間與尾端，分別應該要怎麼做呢？   

同樣地，移除一個元素，js 有 pop, shift, splice 等函式可以運用，如果沒有的話，要怎麼實作移除開頭、中間、尾端的一個元素呢？   
   

(自己實作的話就會發現，需要一直複製搬移資料。)

