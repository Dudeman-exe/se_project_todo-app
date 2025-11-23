class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
  }

  setEventListener() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.classList === ".popup__close" || ".popup") {
        this.close();
      } // fix the click close, and remove _popupCloseBtn event listener
    });
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      console.log("closing");
      this.close(); // fix this here
    }
  }
}

export default Popup;
