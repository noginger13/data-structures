var LinkedList = function() {
  var list = {};
  list.nodes = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    list.nodes[value] = newNode;
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    var currentHead = this.head;

    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return currentHead.value;
    } else {
      this.head = this.head.next;
      delete this.nodes[currentHead.value];
      return currentHead.value;
    }
  };

  list.contains = function(target) {
    for (var key in list.nodes) {
      if (list.nodes[key].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
