import React from 'react'
import { inject, observer } from 'mobx-react'

import Body from './Body'
import Title from './Title'

function TaskPane({ store }) {
  if (!store.currentTask.id) {
    return <div>No task selected</div>
  }
  return (
    <div>
      <Title />
      <Body />
    </div>
  )
}

export default inject('store')(observer(TaskPane))
