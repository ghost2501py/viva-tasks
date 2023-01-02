import React from "react"

import { inject, observer } from "mobx-react"

function MarkAsCompletedBtn({ store }) {
  const handleClick = () => {
    store.currentTask.markAsCompleted()
  }

  let label = 'Mark as completed'
  if (store.currentTask.task.completed) {
    label = 'Completed'
  }

  return (
    <div>
      <button onClick={handleClick} disabled={store.currentTask.task.completed}>
        {label}
      </button>
    </div>
  )
}

export default inject('store')(observer(MarkAsCompletedBtn))
