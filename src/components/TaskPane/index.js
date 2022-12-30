import React from 'react'
import { inject, observer } from 'mobx-react'

import Body from './Body'
import Title from './Title'

function TaskPane({ store }) {
  if (!store.currentTask.id) {
    return <div id="task-pane" className="no-task">No task selected</div>
  }
  return (
    <div id="task-pane">
      <Title />
      <Body />
    </div>
  )
}

export default inject('store')(observer(TaskPane))
