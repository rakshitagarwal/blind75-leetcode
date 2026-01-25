var Trie = function () {
  this.root = {};
};

Trie.prototype.insert = function (word) {
  let node = this.root;
  for (const char of word) {
    if (!node[char]) {
      node[char] = {};
    }
    node = node[char];
  }
  node.isWord = true;
};

Trie.prototype.search = function (word) {
  const node = this.find(word);
  return node != null && node.isWord === true;
};

Trie.prototype.startsWith = function (prefix) {
  return this.find(prefix) !== null;
};

Trie.prototype.find = function (word) {
  let node = this.root;
  for (const char of word) {
    node = node[char];
    if (!node) {
      return null;
    }
  }
  return node;
};
