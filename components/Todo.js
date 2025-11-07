class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateEl = document.querySelector(selector);
  }

  getView() {
    this._todoEl = this._templateEl.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoEl.querySelector(".todo__name");
    const todoCheckboxEl = this._todoEl.querySelector(".todo__completed");
    const todoLabel = this._todoEl.querySelector(".todo__label");
    const todoDate = this._todoEl.querySelector(".todo__date");
    const todoDeleteBtn = this._todoEl.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;
    todoCheckboxEl.checked = this._data.completed;

    return this._todoEl;
  }
}

export default Todo;
