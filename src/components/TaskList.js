import React from "react";
import { observer } from "mobx-react-lite";

function TaskList({ store }) {
  return <div>{store.tasks.length}</div>;
}

export default observer(TaskList);
