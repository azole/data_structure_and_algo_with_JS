Tree
=======

## Tree (basic)
### 基本定義

Tree: 由 > 0 個 Nodes 所構成之有限集合，有一個特定的 Node 稱為 Root，其餘的 Nodes 分成多個互斥的集合

degree of node: 每個 Node 的子樹個數

Leaf: degree = 0 的 Nodes

sibling: 具有相同 parent 的 children。（jquery中也有一個函式這個名字，意義上是一樣的，HTML DOM 本身就是會被建成一棵樹）

Level: 樹有幾層，Root 所在的 level 為 1

### 表示方式

習慣上會採用 link list 的方式表現。

由這種方式表現也可以看出，樹會很浪費空間來儲存指標，而且應該要準備幾個指標也不確定，因此我們會將樹轉成二元樹來表現。

child-Data-sibling

data: 儲存資料   
child: 指標指向 leftmost 子點   
sibling: 指標指向次兄弟

```
    A   
  / | \   
 B  C  D   
   / \   
  E   F   
```

會被轉成

```
   A
  /
 B - C - D
    /
   E - F 
```

我們再把右手轉一下：

```
     A
    /
   B  
    \
     C
    / \
   E   D
    \
     F
```

轉成二元樹後，比較不會浪費 link 空間，資料結構上也能確定就是兩個指標。

## Binary Tree (B.T.)

### 定義
顧名思義，就是每個 node 只能有 0, 1, 2 個兒子，而且有左右之分。

### 二元樹的種類
* Skewed Binary Tree

```
Left-skewed: 向左歪斜      Right-skewed: 向右歪斜
    A                        A
   /                          \
  B                            B
 /                              \
C                                C
```
* Full Binary Tree: 少一個都不行

```
         A
       /   \
      B     C
     / \   / \
    D  E  F   G
```
* Complete Binary Tree: 跟 Full BT 很像，可以少，但不能跳號。(Full BT 是 Complete BT 中的一種。)

```
         A
       /   \
      B     C
     / \  
    D  E  
```


### Binary Tree 的表現方式

之前討論 array 跟 linked list 的時候有討論到，能用 array 做的就能用 linked list 做，反之亦然，差別是在於哪一種比較合適，Tree 的話，比較適合的表現方式是用 linked list。這個大家自己試著各做一次，就能有感覺其優缺點了。


## Binary Tree Traversal
遍例一棵樹的方法有三種：(有沒有跟 expression 的三種表達方式很像？prefix, infix, postfix)   
1. Preorder: 爸爸先印，父 左 右。   
2. Inorder: 爸爸中間印，左 父 右。    
3. Postorder: 爸爸最後印，左 右 父。     


```
         A
       /   \
      B     C
     / \   / \
    D  E  F   G
```

以這棵樹為例，我們要走遍他的話有三種方式：   
1. Preorder: A B D E C F G   
2. Inorder: D B E A F C G   
3. Postorder: D E B F G C A    

注意：給 Preorder + Inorder 或是 Postorder + Inorder 都能唯一決定一棵樹，但給 Preorder + Postorder 無法唯一決定一棵樹。   

例：

```
Post: FDABEG
In:   FGDEAB

1. 先利用 Post 決定 root --> G
2. 再利用 G 在 In 中的位置，斷開後取得 root 的左右樹。
3. 反覆 step1, step2

Post: (FDABE)G  --> In: (F)G(DEAB)

左邊只有 F 很簡單，看右邊子樹 DEAB 在 Post 中的情況

Post: (F)(DABE)G  --> E 是右子樹的 root --> In: (D)E(AB)
所以 D 是 E 的左子樹， AB 是 E 的右子樹

如此反覆，就可以畫出這棵樹：

     G
    / \
   F   E 
      / \
     D   B
        /
       A  
```

在程式實作上，遞用**遞迴**很容易就能做到這件事：

```
function Preorder(T) {
  if(T is not null) {
    print(T.data);
    Preorder(T.left);
    Preorder(T.right);
  }
}

function Inorder(T) {
  if(T is not null) {
    Inorder(T.left);
    print(T.data);
    Inorder(T.right);
  }
}

function Postorder(T) {
  if(T is not null) {
    Postorder(T.left);
    Postorder(T.right);
    print(T.data);
  }
}
```
這邊可以看出來，其實就是印資料的順序不同而已。

作業：   
1. 實作這三個 traversal 函式。  
2. (optional 稍難，可做可不做) 在討論 recursive 時，有討論到 while/for 跟 recursive 可以互換，所以這邊也請大家練習一下實作 while/for 版本的 traversal (pre-, in-, post- 擇一即可)。

Hint: 之前也有提到，函式在呼叫時會利用 stack 來記憶該回到哪一個函式去，遞迴就是一直在呼叫函式，所以當要把 recursive 改寫成 while 版本時，可以利用 stack 來做到這件事。

## Binary Tree 的應用
### Expression

```
A + B * C - D / E

在 stack 的時候，我們討論過怎麼把 infix 轉成 prefix, postfix，其實這邊跟 tree 也是息息相關：
prefix: -+A*BC/DE
postfix: ABC*+DE/-

如果把 Expression 畫成樹：

       -
    /     \
   +       /
  / \     / \
 A   *   D   E
    / \
   B   C
   
preorder: -+A*BC/DE  --> 恰好就是 infix
postorder: ABC*+DE/- --> 恰好就是 postfix

```