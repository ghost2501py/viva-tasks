import {
  action,
  makeObservable,
  observable,
} from 'mobx'

export default class CurrentTask {
  task = {
    id: null,
    title: null,
    body: '',
    completed: false,
  }
  saved = true

  constructor(root) {
    this.root = root
    makeObservable(this, {
      task: observable,
      saved: observable,
      load: action,
      delete: action,
      change: action,
      markAsCompleted: action,
      save: action,
    })
  }

  change = (key, value) => {
    this.task[key] = value
    this.saved = false
  }

  load = (task) => {
    this.task = {...task}
    this.saved = true
  }

  delete = () => {
    const taskIndex = this.root.tasks.findIndex((task) => task.id === this.task.id)
    if (taskIndex > -1) {
      this.root.tasks.splice(taskIndex, 1)
      const task = {id: null, title: '', body: '', completed: false}
      this.load(task)
    }
  }

  markAsCompleted = () => {
    this.task.completed = true
    this.save()
  }

  save = () => {
    const taskIndex = this.root.tasks.findIndex((task) => task.id === this.task.id)
    if (taskIndex > -1) {
      this.root.tasks[taskIndex] = {...this.task}
      this.saved = true
    }
  }
}
