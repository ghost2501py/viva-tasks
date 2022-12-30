import React from 'react'
import {
  action,
  computed,
  makeObservable,
  observable,
  autorun,
  runInAction,
  toJS,
} from 'mobx'

import CurrentTask from './CurrentTask'

class RootStore {
  tasks = []
  currentTask = null

  constructor() {
    this.currentTask = new CurrentTask(this)
    makeObservable(this, {
      tasks: observable,
      createTask: action,
      prefetchData: action,
    })
    runInAction(this.prefetchData)
    autorun(this.saveToJson)
  }

  createTask = () => {
    // TODO: uuid
    const task = { id: Date.now(), title: '', body: '', completed: false }
    this.tasks.unshift(task)
    this.currentTask.update({...task})
  }

  setCurrentTaskById = (taskId) => {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId)
    if (taskIndex > -1) {
      this.currentTask.update({...this.tasks[taskIndex]})
    }
  }

  prefetchData = async () => {
    const tasks = await window.ipcRenderer.invoke('getStoreValue', 'tasks')
    if (tasks) {
      this.tasks = tasks
    }
  }

  saveToJson = async () => {
    const tasks = toJS(this.tasks)
    await window.ipcRenderer.invoke('setStoreValue', 'tasks', tasks)
  }
}

export default new RootStore()
