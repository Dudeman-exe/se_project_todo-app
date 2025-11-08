class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateEl = document.querySelector(selector);
  }

  _generateCheckboxEl() {
    const todoCheckboxEl = this._todoEl.querySelector(".todo__completed");
    const todoLabel = this._todoEl.querySelector(".todo__label");

    todoCheckboxEl.checked = this._data.completed;

    todoCheckboxEl.id = `todo-${this._data.id}`;
    todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoEl = this._templateEl.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoEl.querySelector(".todo__name");
    const todoDate = this._todoEl.querySelector(".todo__date");
    const todoDeleteBtn = this._todoEl.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;

    this._generateCheckboxEl();

    return this._todoEl;
  }
}

export default Todo;
