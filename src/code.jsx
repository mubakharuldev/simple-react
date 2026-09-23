import React from "react";
function code({ task, isTrue }) {
  if (isTrue) {
    return (
      <>
        <h3>{task}</h3>
      </>
    );
  }
  return null;
}

export default code;
