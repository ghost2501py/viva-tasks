import React from "react";
import { inject } from "mobx-react";

function AddTaskBtn({ store }) {
  const handleAddTask = () => {
    store.createTask();
  };

  return (
    <div>
      <button onClick={handleAddTask}>New task</button>
    </div>
  );
}

export default inject('store')(AddTaskBtn);
