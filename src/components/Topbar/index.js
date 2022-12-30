import React from 'react'
import { inject, observer } from 'mobx-react'

import AddTaskBtn from './AddTaskBtn'
import TaskActions from './TaskActions'

function TaskList({ store }) {
  return (
    <div>
      <AddTaskBtn />

      {store.currentTask && (
        <TaskActions />
      )}
    </div>
  )
}

export default inject('store')(observer(TaskList))
