import React from 'react'
import { inject, observer } from 'mobx-react'

function Body({ store }) {
  const handleChange = (evt) => {
    store.currentTask.change('body', evt.target.value)
  }

  return (
    <div id="task-pane-body">
      <textarea
        value={store.currentTask.task.body}
        onChange={handleChange}
        placeholder="Body"
      />
    </div>
  )
}

export default inject('store')(observer(Body))
