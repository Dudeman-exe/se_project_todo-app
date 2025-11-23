import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__input");

    const values = {};
    this._inputList.forEach((input) => {
      values.append(input);
    }); // check for accuracy
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
