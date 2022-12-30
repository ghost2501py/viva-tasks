import React from 'react'
import { inject, observer } from 'mobx-react'

function Body({ store }) {
  const handleChange = (evt) => {
    store.currentTask.setBody(evt.target.value)
  }

  return (
    <div>
      <textarea
        value={store.currentTask.body}
        onChange={handleChange}
        placeholder='Body'
      />
    </div>
  )
}

export default inject('store')(observer(Body))
