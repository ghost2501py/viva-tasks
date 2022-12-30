import React from 'react'
import { inject, observer } from 'mobx-react'

function Item({ store, task }) {
  const handleClick = () => {
    store.setCurrentTaskById(task.id)
  }

  let title = task.title
  if (!title.length) {
    title = 'Untitled'
  }

  return (
    <div onClick={handleClick} className="item">
      {title}
    </div>
  )
}

export default inject('store')(observer(Item))
