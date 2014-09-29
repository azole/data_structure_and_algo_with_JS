Recursion 遞迴

「自己呼叫自己」

通常都能有兩個版本 (1) While (2) Recursion

例如：寫一個函式 factorial，傳入參數 n，計算 n! 後回傳。   
n! = n x (n-1) x (n-2) x ... x 2 x 1   
5! = 5 x 4 x 3 x 2 x 1 = 120   
   
(1) while   
    
(2) Recursion   
  --> trace 程式的跑法   
   
example: 011factorial.js    
```
5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1) 
5 * 4 * 3 * 2 * 1 
5 * 4 * 3 * 2
5 * 4 * 6
5 * 24
120
```

Q. 這兩者之間的效能差異   
   
   
練習題：請寫一個函式 summation，傳入參數 n，然後回傳 1 加到 n 的總和。   
summation(5) = 1 + 2 + 3 + 4 + 5 = 15   

while 版本與 Recursion 版本都要   
   
Note: 這邊提醒大家，其實 summation 正確的做法應該是用 result = (1+n)*n/2; 以複雜度來說這是 O(1)，而不論是用 for, while 或是 recursion 來實作都是 O(n)。
   
雖然實際上跑起來乘法跟除法可能是必較慢，這邊是希望給大家一個概念是，不要迷失在語言與語法之中，善用過去所學的一切，包括數學、資結跟演算法，多思考。

