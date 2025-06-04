export default class ToDoList {
  constructor() {
    this._id = null;
    this._item = null;
  }

  get id() {
    return this._id;
  }

  setId(id) {
    this._id = id;
  }

  getItem() {
    return this._item;
  }

  setItem(item) {
    this._item = item;
  }
}
