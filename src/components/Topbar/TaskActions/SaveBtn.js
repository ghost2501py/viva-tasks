import React from 'react'

import { inject, observer } from 'mobx-react'

function SaveBtn({ store }) {
  const handleClick = () => {
    store.currentTask.save()
  }

  let label = 'Save*'
  if (store.currentTask.saved) {
    label = 'Saved'
  }

  return (
    <div>
      <button onClick={handleClick} disabled={store.currentTask.saved}>
        {label}
      </button>
    </div>
  )
}

export default inject('store')(observer(SaveBtn))
