class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(
        this._formEl,
        inputElement,
        inputElement.validationMessage,
        settings
      );
    } else {
      hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    if (hasInvalidInput(this._inputList)) {
      buttonEl.classList.add(this._inactiveButtonClass);
      buttonEl.disabled = true;
    } else {
      buttonEl.classList.remove(this._inactiveButtonClass);
      buttonEl.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    const buttonEl = this._formEl.querySelector(this._submitButtonSelector);

    _toggleButtonState(inputList, buttonEl, settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        _toggleButtonState(inputList, buttonEl, settings);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
