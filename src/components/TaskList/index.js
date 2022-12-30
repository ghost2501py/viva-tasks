import React from "react";
import { inject, observer } from "mobx-react";

import Item from "./Item";

function TaskList({ store }) {
  return (
    <div>
      {store.tasks.map(task => (
        <Item task={task} key={task.id} />
      ))}
    </div>
  );
}

export default inject('store')(observer(TaskList));