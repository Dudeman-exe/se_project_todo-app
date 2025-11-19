class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._containerEl = document.querySelector(containerSelector);
  }

  renderItems() {}
}

export default Section;
