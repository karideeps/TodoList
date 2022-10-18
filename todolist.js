class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add (todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError('can only add Todo objects');
    }

    this.todos.push(todo);
  }

  size() {
    return this.todos.length
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos.at(-1);
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    let todo = this.itemAt(index);
    this.todos = this.todos.slice(0, index).concat(this.todos.slice(index + 1));
    return todo;
  }

  toString() {
    let resultArray = []
    resultArray.push(`----${this.title}----`);
    this.todos.forEach(todo => resultArray.push(`${todo}`));
    return resultArray.join(`\n`);
  }

  _validateIndex(index) {
    if(!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }
}