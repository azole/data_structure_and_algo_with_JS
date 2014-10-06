上星期我們根據 list 的定義，做出 list 的ADT:

```
listSize (property)     Number of elements in list
pos (property)          Current position in list
length (property)       Returns the number of elements in list

clear (function)        Clears all elements from list
toString (function)     Returns string representation of list
getElement (function)   Returns element at current position
insert (function)       Inserts new element after existing element
append (function)       Adds new element to end of list
remove (function)       Removes element from list
front (function)        Sets current position to first element of list  
end (function)          Sets current position to last element of list 
prev (function)         Moves current position back one element
next (function)         Moves current position forward one element
currPos (function)      Returns the current position in list
moveTo (function)       Moves the current position to specified position
```

然後作業又請大家練習了 arary 與 list 的操作，其實這個作業的練習已經實作了大部分的 list 的功能，當然，在實作 list 時，如果是利用 js 的 array，可以運用它原生的操作函式，不用像我們的作業這樣自己實作，作業請大家自己實作，只是要讓大家感受一下 array 的操作與特性而已。   
   
另外，課本中的範例(033ListArray.js)只有列出用 array 實作的部分，但用 link list 也一樣可以實作出 list，這個就留給大家自己嘗試看看。   
   
注意：在 page 39 清除一個陣列的方式，用 this.dataStore = [] 是比較不好的方式，這樣會建立一個新的陣列。   
比較好的方式是用 this.dataStore.length = 0; 這樣可以清除原有的陣列。   

補充：比較一下 ary = [] 與 ary.length = 0，以下範例觀察到什麼呢？為什麼呢？
```
var ary1 = [1, 3, 5, 7];
var ary2 = [2, 4, 6, 8];

var ary3 = ary1;
ary1 = [];
console.log(ary1, ary3);

ary3 = ary2;
ary2.length = 0;
console.log(ary2, ary3);
```
    
Q：在 page 41 最底下的這個 for 迴圈是有問題的，你覺得應該怎麼修正呢？   
    
<hr>

doubly linked list 的鏈結處理上又更為複雜了一些，大家可以參考 page 81 頁之後的說明。
這部份分享時直接討論與練習怎麼處理，課本上的範例碼有錯誤，不要照用。

<hr>

閱讀資料：   
Chapter 3 的 37 ~ 46 頁 (書籍頁碼，不是 pdf 頁數)       
Chapter 6 的 81 ~ 86 頁 (書籍頁碼，不是 pdf 頁數)        

                        