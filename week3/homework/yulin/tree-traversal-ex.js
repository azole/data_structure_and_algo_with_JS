'use strict';

function Node(data) {
  this.data = data;
  this.leftChild = null;
  this.rightChild = null;
}

var root = buildTree();
preorder(root); // ABCDEF
console.log();
inorder(root); // BDCAEF 
console.log();
postorder(root); // DCBFEA
console.log();
preorderWhile(root); // ABCDEF
console.log();

// Homework
// 可以用 process.stdout.write 取代 console.log 就不會換行

// 依照 preorder 的順序印出樹
function preorder(T) {
  if (T !== null) {
    process.stdout.write(T.data);
    preorder(T.leftChild);
    preorder(T.rightChild);
  };
}

// 依照 inorder 的順序印出樹
function inorder(T) {
  if (T !== null) {
    inorder(T.leftChild);
    process.stdout.write(T.data);
    inorder(T.rightChild);
  };
}

// 依照 postorder 的順序印出樹
function postorder(T) {
  if (T !== null) {
    postorder(T.leftChild);
    postorder(T.rightChild);
    process.stdout.write(T.data);
  };
}

// 依照 preorder 的順序印出樹
function preorderWhile(T) {
  var stack = [],
    value = T.data,
    deadline = 20;
  while (!!value) {
    process.stdout.write(value);
    if (T.rightChild !== null) {
      // 一直丟右手分支
      stack.push(T.rightChild);
    };
    if (T.leftChild !== null) {
      // 將左手的分支改為爸爸
      T = T.leftChild;
      value = T.data;
    } else {
      if (stack.length > 0) {
        // 左手沒東西了, 開始撈 stack
        T = stack.pop();
        value = T.data;
      } else {
        // stack 空了, Done!
        break;
      };
    };
  };
  /**********
   * step1: 先印爸爸
   * step2: 記錄右邊的路線
   * step3: 往左邊走
   * step4: 先印爸爸
   * step5: 記錄右邊的路線
   * step6: 往左邊走
   * step7: 左邊沒路了, 拿回一條右邊的路
   * step8: 先印爸爸
   * step9: 往左邊走......
   **********/
}

//---------------------------------------------------------
// 先用一種最笨的方式建樹，主要是練習 traversal 的部分
function buildTree() {
  var root = new Node('A');
  root.leftChild = new Node('B');
  root.leftChild.rightChild = new Node('C');
  root.leftChild.rightChild.leftChild = new Node('D');
  root.rightChild = new Node('E');
  root.rightChild.rightChild = new Node('F');
  return root;
  /**********
      A
     / \
    B   E
     \   \
      C   F
     /
    D
  **********/
}
