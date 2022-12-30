import React from "react";

function Topbar({ store }) {
  const handleAddTask = () => {
    store.createTask();
  };

  return (
    <div>
      <button onClick={handleAddTask}>New task</button>
    </div>
  );
}

export default Topbar;
