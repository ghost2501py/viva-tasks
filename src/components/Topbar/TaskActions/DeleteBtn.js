import React from 'react';

import { inject, observer } from 'mobx-react'

function DeleteBtn({ store }) {
  const handleClick = () => {
    store.currentTask.delete()
  }

  return (
    <div>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default inject('store')(DeleteBtn)
