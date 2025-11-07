class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateEl = document.querySelector(selector);
  }

  getView() {
    const todoEl = this._templateEl.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = todoEl.querySelector(".todo__name");
    const todoCheckboxEl = todoEl.querySelector(".todo__completed");
    const todoLabel = todoEl.querySelector(".todo__label");
    const todoDate = todoEl.querySelector(".todo__date");
    const todoDeleteBtn = todoEl.querySelector(".todo__delete-btn");

    return todoEl;
  }
}

export default Todo;
