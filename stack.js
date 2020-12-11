'use strict';

class Stack {
  constructor() {
    this._length = 0;
    this._stack = {};
  }

  get length() {
    return this._length;
  }

  set length(value) {}

  get stack() {
    return this._stack;
  }

  set stack(value) {}

  size() {
    return this._length;
  }

  push(item) {
    this._stack[this._length++] = item;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this._stack[this._length-- - 1];
    }
  }

  isEmpty() {
    return this._length === 0;
  }
}

module.exports = Stack;
