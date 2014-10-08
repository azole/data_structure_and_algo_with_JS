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

var c = find(2);
console.log(c);

// 後面的自己測試看看嚕

function insertToFirst(newEle) {
  var node = new Node(newEle);
  // TODO
  if (head !== null) {
    var tempHead = head;
    head = node;
    head.next = tempHead;
  } else {
    head = node;
  }
}

function insertToTail(newEle) {
  var node = new Node(newEle);
  // TODO
  var cur = null; //default
  if (head !== null) {
    cur = head;
    while(cur.next !== null) {
      cur = cur.next;
    }
    cur.next = node;
  } else {
    head = node;
  }
}


//這個寫的不好...
function insertAfterEle(newEle, ele) {
  var node = new Node(newEle);
  // TODO
  // defalut current
  var cur = head;
  if (cur === null || head === null) {
    console.log('cur or head can\'t be null');
    return false;
  }

  while(cur.next !== null ) {
    if (cur.element === ele) {
      // 這邊不確定
      var tmpNext = cur.next;
      node.next = tmpNext;
      cur.next = node;
      //cur = cur.next;
      break;
    } else {
      cur = cur.next;
    }
  }
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


function removeFromFirst() {
  if (head !== null) {
    var tmpHead = head;
    head = head.next;
    tmpHead.next = null;
  }
}

function removeFromTail() {
  var cur = null;

  if (head.next == null) {
    head = null;
  } else {
    cur = head;
    while (cur.next !== null) {
      if (cur.next.next == null) {
        cur.next = null;
      } else {
        cur = cur.next;
      }

    }
  }
}

function removeEle(ele) {
  if (head !== null) {
    var cur = head;
    while(cur.next !== null) {
      if (cur.next.element == ele) {
        var beRemoveEle = cur.next;
        cur.next = cur.next.next;
        beRemoveEle.next = null;
      } else {
        cur = cur.next;
      }
    }
  }
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
// 抱歉... 這個我不知道我在寫什麼，可 skip...
function mergeList(list1, list2) {
  // TODO
  var newList;
  var list1Last = null;
  var cur = null;
  var head = null;

  if (list1.head == null) {
    newList = list2;
    // cur = list2.head;
    // head = list2.head;
    return newList;
  }
  if (list2.head == null) {
    newList = list1;
    return newList;
  }

  cur = list1.head;

  while(cur.next !== null) {
    cur = cur.next;
  }

  cur.next = list2.head;
}
