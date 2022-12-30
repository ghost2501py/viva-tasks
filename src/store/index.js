import React from 'react'
import {
  action,
  computed,
  makeObservable,
  observable,
  autorun,
} from 'mobx'

import CurrentTask from './CurrentTask'

class Store {
  tasks = []
  currentTask = null

  constructor() {
    this.currentTask = new CurrentTask(this)
    makeObservable(this, {
      tasks: observable,
      createTask: action,
    })
  }

  createTask() {
    // TODO: uuid
    const task = { id: Date.now(), title: '', body: '', completed: false }
    this.tasks.push(task)
    this.currentTask.update({...task})
  }

  setCurrentTaskById(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId)
    if (taskIndex > -1) {
      this.currentTask.update({...this.tasks[taskIndex]})
    }
  }
}

export default new Store()
