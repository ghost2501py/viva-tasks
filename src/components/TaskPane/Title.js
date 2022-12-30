import React from 'react'
import { inject, observer } from 'mobx-react'

function Title({ store }) {
  const handleChange = (evt) => {
    store.currentTask.setTitle(evt.target.value)
  }

  return (
    <div>
      <input
        value={store.currentTask.title}
        onChange={handleChange}
        type='text'
        placeholder='Title'
      />
    </div>
  )
}

export default inject('store')(observer(Title))
