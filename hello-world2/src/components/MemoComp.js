import React from "react";

function MemoComp({ name }) {
  console.log("Memo Component Rendered");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
