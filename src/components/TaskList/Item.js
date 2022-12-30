import React from "react";
import { inject, observer } from "mobx-react";

function Item({ store, task }) {
  const handleClick = () => {
    store.setCurrentTaskById(task.id);
  };

  return (
    <div onClick={handleClick}>
      <div>{task.title}1</div>
    </div>
  );
}

export default inject('store')(observer(Item));
