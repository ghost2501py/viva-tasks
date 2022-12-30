import {
  action,
  computed,
  makeObservable,
  observable,
  autorun,
} from "mobx";

export default class TasksStore {
  tasks = [];

  constructor () {
    makeObservable(this, {
      tasks: observable,
      totalTasks: computed,
      storeDetails: computed,
      createTask: action,
      updateTask: action,
      deleteTask: action,
    });
    autorun(this.logStoreDetails);
  }

  get totalTasks() {
    return this.tasks.length;
  }

  createTask() {
    const task = { id: Date.now(), title: "", body: "", completed: false }
    this.tasks.push(task);
  }

  updateTask(taskId, update) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex > -1 && update) {
      this.tasks[taskIndex] = update;
    }
  }

  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex > -1) {
      this.tasks.splice(taskIndex, 1)
    }
  }

  get storeDetails () {
    return `We have ${this.totalTasks}`
  }

  logStoreDetails = () => {
    console.log(this.storeDetails);
  }
}
