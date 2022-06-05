

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {edges: []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node] !== undefined) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];

  for (var key in this.nodes) {
    for (var i = 0; i < this.nodes[key].edges.length; i++) {
      var deltedIndex = this.nodes[key].edges.indexOf(node);
      if (deltedIndex !== -1) {
        this.nodes[key].edges.splice(deltedIndex, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode)) {
    for (var i = 0; i < this.nodes[fromNode].edges.length; i++) {
      console.log('edges', this.nodes[fromNode].edges[i]);
      console.log('toNode', toNode);
      if (this.nodes[fromNode].edges[i] === toNode) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.nodes[fromNode].edges.push(Number(toNode));
    console.log('addEdge from', this.nodes[fromNode].edges);
    this.nodes[toNode].edges.push(Number(fromNode));
    console.log('addEdge to', this.nodes[fromNode].edges);
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromIndex = this.nodes[fromNode].edges.indexOf(toNode);
  this.nodes[fromNode].edges.splice(fromIndex, 1);

  var toIndex = this.nodes[toNode].edges.indexOf(fromNode);
  this.nodes[toNode].edges.splice(toIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    console.log('key for this.nodes', key);
    cb(key);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


