'use strict';

function Node(element) {
  this.element = element;
  this.prev = null; // 連接前一個 node
  this.next = null; // 連接後一個 node
}

var head = null;

insert('AA', null);
insert('CC', 'AA');
insert('BB', 'AA');
insert('EE', 'CC');
insert('DD', 'CC');
traverse();
reverse(); // 反方向的印出資料，驗證 prev 這個方向的鏈結是否正確

// 分別測試移除中間、第一個與最後一個元素
remove('CC');
traverse();
reverse();
remove('EE');
traverse();
reverse();
remove('AA');
traverse();
reverse();

function find(item) {
  var curr = head;
  while (curr.element != item) {
    curr = curr.next;
  }
  return curr;
}

function insert(newEle, item) {
  // TODO: instert an newEle after item
}

function remove(item) {
  // TODO: remove item
}

function traverse() {
  var data = [];
  var curr = head;
  while (curr !== null) {
    data.push(curr.element);
    curr = curr.next;
  }
  console.log(data.join());
}

// 反方向的印出資料，驗證 prev 這個方向的鏈結是否正確
function reverse() {
  var data = [];
  var curr = head;
  // 找到最後一個位置
  while (curr !==null && curr.next !== null) {
    curr = curr.next;
  }
  while (curr !== null) {
    data.push(curr.element);
    curr = curr.prev;
  }
  console.log(data.join());
}
