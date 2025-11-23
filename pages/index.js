import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidation.js";
import Section from "../utils/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const addPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: () => {},
});

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoEl = todo.getView();
  return todoEl;
};

addTodoButton.addEventListener("click", () => {
  addPopup.open();
});

addPopup.setEventListener();

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  const todo = generateTodo(values);
  section.addItem(todo);
  newTodoValidator.resetValidation();
  addPopup.close();
});

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = generateTodo(item);
    todosList.append(todo);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);

newTodoValidator.enableValidation();
