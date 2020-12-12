'use strict';

class Queue {
  constructor() {
    this._queue = {};
    this._length = 0;
    this._headIndex = 0;
  }

  get length() {
    return this._length;
  }

  set length(value) {}

  get queue() {
    return this._queue;
  }

  set queue(value) {}

  get headIndex() {
    return this._headIndex;
  }

  set headIndex(value) {}

  enQueue(item) {
    this._queue[this._length++] = item;
  }

  deQueue() {
    if (this.isEmpty()) {
      return null;
    } else {
      const item = this._queue[this._headIndex];
      this._queue[this._headIndex] = undefined;
      this._headIndex++;
      this._length--;
      return item;
    }
  }

  isEmpty() {
    return this._length === 0;
  }

  size() {
    return this._length;
  }
}

module.exports = Queue;
