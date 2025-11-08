class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateEl = document.querySelector(selector);
  }

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });

    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoEl.remove();
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoEl.querySelector(".todo__completed");
    this._todoLabel = this._todoEl.querySelector(".todo__label");

    this._todoCheckboxEl.checked = this._data.completed;

    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoEl = this._templateEl.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoEl.querySelector(".todo__name");
    const todoDate = this._todoEl.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoEl.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;

    this._generateCheckboxEl();
    this._setEventListeners();

    return this._todoEl;
  }
}

export default Todo;
