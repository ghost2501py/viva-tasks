import React from "react";
import { observer } from "mobx-react-lite";

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

export default observer(TaskList);
