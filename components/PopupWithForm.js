import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {
      values.append(`${input.name}: ${input.value}`);
    }); // fix key/value pair (input.name, input.value). check sprint 4 obj lesson. braket notation
    return values;
  }

  setEventListener() {
    super.setEventListener;

    this._popupForm.addEventListener("submit", (evt) => {
      console.log("submitted");
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit();
    });
  }
}

export default PopupWithForm;
