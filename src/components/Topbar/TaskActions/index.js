import React from 'react'

import DeleteBtn from './DeleteBtn'
import MarkAsCompletedBtn from './MarkAsCompletedBtn'
import SaveBtn from './SaveBtn'

function TaskActions() {
  return (
    <div id="task-actions">
      <DeleteBtn />
      <MarkAsCompletedBtn />
      <SaveBtn />
    </div>
  )
}

export default TaskActions
