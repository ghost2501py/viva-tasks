import React from "react";

function Item({ task }) {
  return (
    <div>
      <div>{task.title}</div>
    </div>
  );
}

export default Item;
