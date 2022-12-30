import React from 'react'
import { inject, observer } from 'mobx-react'

import AddTaskBtn from './AddTaskBtn'
import TaskActions from './TaskActions'

function TaskList({ store }) {
  return (
    <div id="topbar">
      <AddTaskBtn />

      {store.currentTask.id && (
        <TaskActions />
      )}
    </div>
  )
}

export default inject('store')(observer(TaskList))
