class Stack {
  constructor(words: []) {
    this.items = words;
  }

  // add element to the stack
  add(element) {
    return this.items.push(element);
  }

  // remove element from the stack
  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  // view the last element
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // the size of the stack
  size() {
    return this.items.length;
  }

  // empty the stack
  clear() {
    this.items = [];
  }

  // reverse the stack
  reverse() {
    this.items = this.items.reverse();
  }

  // mappping the stack
  map(callback) {
    return this.items.map(callback);
  }
}

export default Stack;
