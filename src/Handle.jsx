import React from "react";

function Handle() {
  function handle_click() {
    alert("You cliked the button");
  }
  let count = 0;
  function handleCount() {
    console.log(count++);
  }
  return (
    <>
      {/* Event handle */}
      <button onClick={handle_click}>Click me</button>
      {/* In Arrow function */}
      <button onClick={() => console.log("Hello world")}>console.log</button>
      {/* Counter */}
      <button onClick={handleCount}>Count</button>
    </>
  );
}

export default Handle;
