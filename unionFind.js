class UnionFind {
  constructor(length) {
    this.count = length;
    this.parent = new Array(length);
    for (let index = 0; index < length; index++) {
      this.parent[index] = index;
    }
  }
  findParent(p) {
    let root = p;
    while (this.parent[root] !== root) {
      root = this.parent[root];
    }
    // path compress
    while (this.parent[p] !== p) {
      let temp = p;
      p = this.parent[p];
      this.parent[temp] = root;
    }
    return root;
  }

  union(p, q) {
    const rootP = this.findParent(p);
    const rootQ = this.findParent(q);
    if (rootP === rootQ) return;
    this.parent[rootP] = rootQ;
    this.count--;
  }
}

module.exports = UnionFind;
