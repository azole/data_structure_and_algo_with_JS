'use strict';

/*
 * (1) 學會 link 的操作，記住千萬不可以讓 link 斷掉，不然資料將會遺失在茫茫大海(記憶體)中。
 * (2) 跟 array 的操作比較一下。
 *
 * 這邊的函式預設都是操作主要的這個 list
 */

function Node(element) {
  this.element = element;
  this.next = null; // 預設為 null
}

var head = null;


insertToFirst(1,head);
traverse(head);

insertToTail(2);
traverse(head);

insertToTail(4);
traverse(head);

insertToFirst(0);
traverse(head);

// 在2 的後面 insert 3
insertAfterEle(3, 2);
traverse(head);

var c = find(2);
console.log(c);

// 後面的自己測試看看嚕
removeFromFirst();
traverse(head);

removeFromTail();
traverse(head);

removeEle(2);
traverse(head);

var list1 = head;
//var list3 = list1;

head = null;
var list2;
insertToTail(5);
traverse(head);
insertToTail(6);
traverse(head);
insertToTail(8);
traverse(head);
insertAfterEle(7,6);
traverse(head);

var list2 = head;
traverse(list1);
var mergelist = mergeList(list1,list2);
traverse(list1);
traverse(mergelist);



function insertToFirst(newEle) {
  var node = new Node(newEle);
  // TODO
  //change node to be head, and origin head become node's next element
  node.next = head;
  head = node;
}

function insertToTail(newEle) {
  var node = new Node(newEle);
  // TODO
  if(head == null)
  {
    head = node;

    return ;
  }
  //find tail node of list
  //add node after tail node
  var tailNode = findTailNode(head);
  tailNode.next = node;
}

function insertAfterEle(newEle, ele) {
  var node = new Node(newEle);
  // TODO
  //find ele element in the list
  //add ele.next into node.next
  //add node afrer ele node
  var eleNode = find(ele);
  node.next = eleNode.next;
  eleNode.next = node;
}

// 回傳包含該 ele 的 node 的參考 (第一個就好)
function find(ele) {
  // 為什麼這個判斷式不用加？
  // if(head === null) {
  //   return null;
  // }
  var cur = head;
  while (cur !== null) {
    if (cur.element === ele) {
      break;
    }
    cur = cur.next;
  }
  return cur;
}


function findTailNode(listHead){
  var cur = listHead;
  while (cur !== null){
    if(cur.next === null)
      break;

    cur = cur.next;
  }
  return cur;
}

function removeFromFirst() {
  // TODO
  head = head.next;
}

function removeFromTail() {
  // TODO
  var cur = head;
  var tailNode = findTailNode(head);
  while(cur.next.element !== tailNode.element)
    cur = cur.next;

  cur.next = null;
}

function removeEle(ele) {
  // TODO
  var cur = head;
  while(cur.next.element !== ele)
    cur = cur.next;

  cur.next = cur.next.next;
}

// 逐個印出 link list 的元素
function traverse() {
  var cur = head;
  while (cur !== null) {
    process.stdout.write(cur.element.toString() + " ");
    cur = cur.next;
  }
  console.log();
}

// 合併兩個 list
function mergeList(list1, list2) {
  // TODO
   var mergelist = list1;
   var tailNode = findTailNode(list1);

   tailNode.next = list2;

   return mergelist;
}
