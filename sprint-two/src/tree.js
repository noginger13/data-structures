var Tree = function(value) {
  var newTree = {};
  newTree.value = value;


  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = new Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  //Check for value
  if (this.value === target) {
    return true;
  } else if (this.hasChildren) {
    for (var i = 0; i < this.children.length; i++) {
      this.chidren[i].contains(target);
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
