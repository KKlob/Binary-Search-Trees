class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let toCheckStack = [this.root];

      while (toCheckStack.length) {
        let current = toCheckStack.pop();

        if (val > current.val) {
          if (current.right) {
            toCheckStack.push(current.right);
          } else {
            current.right = newNode;
          }
        } else if (val < current.val) {
          if (current.left) {
            toCheckStack.push(current.left);
          } else {
            current.left = newNode;
          }
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    function compareNode(node) {
      if (val > node.val) {
        if (node.right) {
          compareNode(node.right);
        } else {
          node.right = newNode;
        }
      } else if (val < node.val) {
        if (node.left) {
          compareNode(node.left);
        } else {
          node.left = newNode;
        }
      }
    }
    compareNode(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return undefined;
    }

    let current = this.root;

    while (val !== current.val) {
      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          return undefined;
        }
      } else if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          return undefined;
        }
      }
    }
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) {
      return undefined;
    }

    function findNode(node) {
      if (node.val !== val) {
        if (val > node.val) {
          if (node.right) {
            return findNode(node.right);
          } else return undefined;
        } else if (val < node.val) {
          if (node.left) {
            return findNode(node.left);
          } else return undefined;
        }
      } else {
        return node;
      }
    }
    return findNode(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = { BinarySearchTree };
