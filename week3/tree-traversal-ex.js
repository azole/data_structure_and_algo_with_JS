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

// Homework
// 可以用 process.stdout.write 取代 console.log 就不會換行

// 依照 preorder 的順序印出樹
function preorder(T) {

}

// 依照 inorder 的順序印出樹
function inorder(T) {

}

// 依照 postorder 的順序印出樹
function postorder(T) {

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
}
