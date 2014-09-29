在討論 link list 之前，我們先來想一下 array 的短處：   
1. 在很多的程式語言中，array  的大小是固定的，當這個array被填滿後，就很難在新增元素了。
2. 在 array 中，要新增或刪除元素是很麻煩的，需要一直移動（複製）元素。
3. array 的合併與分割也不容易。

--> 當然，這邊很多的缺點在 js 中是沒有的，還記得第 2 章提的嗎？js 中的 array 是一種物件。   

但相對的，js 中的 array 也就沒有其他語言中的 array 的那些優點，速度也比較慢一些。

這邊補充一下 array 的優點：
1. 可支援 random access
2. 循序讀取的順序快
3. 沒有 link 的空間需求
   
   
link list 幾乎可以取代所有一維陣列能做的事情，除了 random access 之外。   

<hr>
#### Linked Lists Defined

Linked List 是一組叫做 node 的物件的集合，每個 node 都會利用物件參考來連著下一個 node，這個連到下一個 node 的參考，我們就稱為 link。   
   
當 array 是靠"位置"來參考的時候，link list 是依靠彼此之間的聯結，通常我們會有一個 head，用來"記住" link list 的第一個 node，每個 node 中都會有一個 next，用來儲存下一個 node 的 reference，而最後一個 node 的 next 就指向 null，這很重要，可以用來做停止 (link list 結尾)的判斷。   
   
這邊要請大家仿照 array 的作業，練習做一下 linked list 的一些基本操作。
在做這個練習的時候，最重要的是兩件事：   
(1) 學會 link 的操作，記住千萬不可以讓 link 斷掉，不然資料將會遺失在茫茫大海(記憶體)中。   
(2) 跟 array 的操作比較一下。   
   
   
做完這個練習後，請比較 array 與 link list 各自的優缺點。
