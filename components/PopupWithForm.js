import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
  }

  setEventListener() {
    super.setEventListener;

    this._popupForm.addEventListener("submit", (evt) => {
      console.log("submitted");
    });
  }
}

export default PopupWithForm;
