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

insertToFirst(1);
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

// var c = find(2);
// console.log(c);

// 後面的自己測試看看嚕

function insertToFirst(newEle) {
  var node = new Node(newEle),
    tempHead = head;
  head = node;
  head.next = tempHead;
};

function insertToTail(newEle) {
  var node = new Node(newEle),
    cur = null;
  if (head === null) {
    head = node;
  } else {
    cur = head;
    while (cur.next !== null) {
      cur = cur.next;
    };
    cur.next = node;
  };
};

function insertAfterEle(newEle, ele) {
  var node = new Node(newEle),
    cur = head;
  while (cur !== null) {
    if (cur.element === ele) {
      node.next = cur.next;
      cur.next = node;
      break;
    };
    cur = cur.next;
  };
  if (head === null) {
    console.log("This linked list is NULL, it can't insert any element.");
  } else if (cur === null) {
    console.log("Can't find " + ele + " in this linked list.");
  };
};

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

function removeFromFirst() {
  head = head.next;
};
removeFromFirst();
traverse(head);

function removeFromTail() {
  var cur = null;
  if (head !== null) {
    cur = head;
    if (cur.next !== null) {
      while (cur.next.next !== null) {
        cur = cur.next;
      };
      cur.next = null;
    } else {
      cur = null;
    };
  } else {
    console.log("This linked list is NULL, it can't remove anymore.");
  };
};
removeFromTail();
traverse(head);

function removeEle(ele) {
  var cur = null;
  if (head !== null) {
    cur = head;
    if (cur.element === ele) {
      cur = cur.next;
    } else {
      if (cur.next !== null) {
        while (cur.next.element == ele) {
          cur.next = cur.next.next;
        };
      } else {
        console.log("Can't find " + ele + " in this linked list.");
      };
    };
  } else {
    console.log("This linked list is NULL, it can't remove anymore.");
  };
};
removeEle(2);
traverse(head);

// 逐個印出 link list 的元素
function traverse() {
  var cur = head;
  while (cur !== null) {
    process.stdout.write(cur.element.toString() + " ");
    cur = cur.next;
  }
  console.log('');
}

// 合併兩個 list
var head2 = {
  element: 3,
  next: {
    element: 30,
    next: null
  }
};

function mergeList(list1, list2) {
  // TODO
};
