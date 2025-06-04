export default class ToDoList {
  constructor() {
    this.tasks = [];
  }

  getTasks() {
    return this.tasks;
  }

  clearTasks() {
    this.tasks = [];
  }

  addItemToList(itemObj) {
    this.tasks.push(itemObj);
  }

  removeItemFromList(id) {
    const list = this.tasks;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list.splice(i, 1);
        break;
      }
    }
  }
}
