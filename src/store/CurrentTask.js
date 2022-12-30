import {
  action,
  computed,
  makeObservable,
  observable,
} from "mobx";

export default class CurrentTask {
  id = null
  title = ''
  body = ''
  completed = false

  constructor(root) {
    this.root = root
    makeObservable(this, {
      id: observable,
      title: observable,
      body: observable,
      completed: observable,
      update: action,
      setTitle: action,
      setBody: action,
      save: action,
    });
  }

  update = (task) => {
    this.id = task.id
    this.title = task.title
    this.body = task.body
    this.completed = task.completed
  }

  setTitle = (title) => {
    this.title = title
  }

  setBody = (body) => {
    this.body = body
  }

  save = () => {
    const taskIndex = this.root.tasks.findIndex((task) => task.id === this.id);
    if (taskIndex > -1) {
      this.root.tasks[taskIndex] = {
        id: this.id,
        title: this.title,
        body: this.body,
        completed: this.completed,
      }
    }
  }
}
