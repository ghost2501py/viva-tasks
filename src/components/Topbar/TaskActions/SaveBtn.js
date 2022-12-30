import React from "react";

import { inject, observer } from "mobx-react";

function SaveBtn({ store }) {
  const handleClick = () => {
    store.currentTask.save();
  };

  return (
    <div>
      <button onClick={handleClick}>Save</button>
    </div>
  );
}

export default inject('store')(SaveBtn);
