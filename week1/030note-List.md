List 就是一組資料清單，通常在不需要排序、不需要搜尋的時候很有用，如果需要搜尋、排序就不怎麼有用，尤其是在處理複雜的資料結構的時候。

但這邊我們利用這個簡單的資料結構來學習怎麼定義跟實作 ADT (abstract data type)。

wiki 上對 ADT 的定義：

「抽象資料型別（ADT）是純粹理論實體，用於簡化描述抽象演算法，分類與評價資料結構，形式描述程式語言的型別系統。一個ADT可以用特定資料型別或資料結構實作，在許多程式語言中有許多種實作方式；或者用形式規範語言描述。

實現於程式時，抽象資料型別只顯現出其介面，並將實作加以隱藏。使用者只需關心它的介面，而不是如何實作。未來更可以改變實作的方式。（其支援資訊隱藏原理，或保護程式免受變化的衝擊。）

抽象資料型別的強處在於對使用者隱藏了實作細節，僅公開其介面。這表示抽象資料型別可以用各種方法來實作，只要遵循其介面，就不會影響到使用者。」


好，那我們現在來試著做 list 的 ADT。

但在做 list ADT 之前，我們要先知道 list 的定義，包含它的特性與會有的操作：

A list is an ordered sequence of data. Each data item stored in a list is called an "element". In JavaScript, the elements of a list can be of any data type. There is no predetermined number of elements that can be stored in a list, though the practical limit will be the amount of memory available to the program using the list.

A list with no elements is an "empty" list. The number of elements stored in a list is called the "length" of the list. Internally, the number of elements in a list is kept in a "listSize" variable. You can "append" an element to the end of a list, or you can "insert" an element into a list after an existing element or at the beginning of a list. Elements are deleted from a list using a "remove" operation. You can also "clear" a list so that all of its current elements are removed.

The elements of a list are displayed using either a "toString()" operation, which displays all the elements, or with a "getElement()" operation, which displays the value of the current element.

Lists have properties to describe location. There is the "front" of a list and the "end" of a list. You can move from one element of a list to the next element using the "next()" operation, and you can move backward through a list using the "prev()" operation. You can also move to a numbered position in a list using the "moveTo(n)" operation, where n specifies the position to move to. The "currPos" property indicates the current position in a list.

根據這樣的定義，我們可以做出 list 的ADT:

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


確定了這個資料結構的 ADT 後，才開始決定要怎麼實作。
在 ADT 的描述中，並沒有限定要用哪種語言，甚至是哪種基本的資料行別來做，ADT 是跨語言的、是抽象的。

為了能夠更加確實地顯示 ADT 的抽象，我們這邊先不實作，先跳去第 6 章看一下什麼是 linked list。
