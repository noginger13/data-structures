
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set.call(LimitedArray, index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get.call(LimitedArray, index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set.call(LimitedArray, index, undefined);
};

// limitedArray.each = function(callback) {
//   for (var i = 0; i < storage.length; i++) {
//     callback(storage[i], i, storage);
//   }
// };



/*
 * Complexity: What is the time complexity of the above functions?
 */


