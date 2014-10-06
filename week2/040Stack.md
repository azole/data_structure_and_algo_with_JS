Stack
========
   
##### 基本定義  
stack 是一種先進後出 (Last In First Out, LIFO) 的資料結構，像碟盤子一樣，一個一個疊上去，要拿的話，只能從最上面(最後疊進去)的開始拿。

基本的動作是 push (堆疊上去) 跟 pop (拿出來)，其他的定義，網路上查得到：wiki(http://zh.wikipedia.org/zh-tw/%E5%A0%86%E6%A0%88)，或是參考書的 chapter 4。

```
function Stack() { 
  this.dataStore = []; 
  this.top = 0; 
  this.push = push; 
  this.pop = pop; 
  this.peek = peek;
}
```

stack 的應用很多，但不像 Queue，Queue 在應用層面比較常碰見，所以大家也比較熟悉。stack 則不然，所以大家會陌生一點，但在底層的東西卻很常使用到。    
   
##### 應用 1:       
不知道大家有沒有思考過，在寫函式的時候，會一個函式呼叫一個，當函式執行完畢，跑到 return 這行的時候，到底是 return 去了哪裡？系統怎麼知道要回到哪裡去？   
    
function a() 呼叫 function b()，function c() 又呼叫了 function d()，d 執行了 return 時，系統怎麼知道要回去 c？   
    
其實這邊就是用 stack 來做的，當 a 要呼叫 b 時，會把 a 目前的狀態打包一下，然後 push 進去 stack，所以到 d 的時候，stack 裡頭已經有 a、b、c 三個函式了，c 是最晚被放進去的，當 d 執行到 return 時，系統就去這個 stack 做一個 pop 的動作，就能取得"上一個狀態"，也就是執行到一半的 c。    

其他的應用還有很多，例如遞迴、字串反轉、用 backtracking 的方式走迷宮...等。    

##### 應用 2: 用 backtracking 的方式走迷宮   
backtracking 是採用 try-and-error 的方式在進行的，每一步都試試看，錯了就回到上一步的其他選擇再試試看。   
參考資料：wiki (http://zh.wikipedia.org/wiki/%E5%9B%9E%E6%BA%AF%E6%B3%95)

這邊不知道大家有沒有發現，"回到上一步"，這個動作很常出現在 stack 的各種應用說明中，其實，也就是如果你遇到的問題是需要一直回到上一步的，那大概就是很適合採用 stack 了。
   
##### 應用 3: （作業）
這邊請大家思考一個問題，如果現在請你實作一個計算機，這個計算機允許使用者輸入像是 2*(3+1) 這樣的算式，有 + - x / 跟括號()，優先順序是 () > x / > + -，使用者輸入完整的算式後按下 =，計算機要解析這個算式並且算出答案，這要怎麼做呢？      
(假設使用者都會乖乖地輸入整數、加減乘除與()，不會有這些以外的字元。)     
   
3+4 這樣的算式，我們稱為 infix，這種表達方式是給人看的，電腦要解析這樣的算式，必須要反覆地掃描這個字串(或陣列)，你可以自己試著做做看就知道了。   

由於這種 infix 形式的運算式並不適合電腦操作，我們會將它轉成 postfix 或是 prefix 的形式。   
    
postfix: 3 4 +   
prefix: + 3 4      

這邊大家應該看出來了，這個 in-, pre-, post- 是指運算子(+-x/等)的位置，prefix 與 postfix 比較適合電腦進行解析(等後面實作的時候就能感受到)，那要怎麼轉呢？

好，那目前問題可以說是被拆成了兩個小部分：   
1. convert infix to postfix   
2. calculate this postfix expression  
   
這兩個小問題，都會用上 stack，而且只要用上 stack 就會變得非常簡單。所以在實作這個小問題之前，要先請大家實作出自己的 stack，這部分大家可以參考 041Stack.js，當然，如果要用 js 內建的 pop 或 push 也沒有問題，但記得還是請包裝好自己的這個 stack，只暴露出 stack 應有的操作，而非全部 js array 的特性與功能。   
   

1. convert infix to postfix   
這邊提供 pseudo code 給大家參考，請大家自己實作看看。
```
when an operand is read, output it
when an operator is read:
  pop until the top fo the stack has lower priority
  push it
when ) is found, pop until we get the matching (
when we reach the end of input, pop until the stack is empty
```    
   
2. calculate this postfix expression     
這邊提供 pseudo code 給大家參考，請大家自己實作看看。
```
when an operand is read, push it
when an operator is read:
  pop two variable and calucate it by this operator
  push this result
when we reach the end of postfix, pop and it is the final result
```    

##### 結論
stack 除了上述的應用外，還有許多其他的用途，大家可以自己想想看或查查看，最重要的還是感受一下這資料結構的設計與用途。
   
   
   