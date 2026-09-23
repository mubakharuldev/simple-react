import React from "react";
import Code from "./code";
import Text from "./Text";
function App() {
  return (
    <>
      <Text Tittle="React js code" />
      <Code task="I learn React.js" isTrue={true} />
      <Code task="I write code" isTrue={true} />
      <Code task="I use Visual Studio code" isTrue={true} />
      <Code task="I learn Coding" isTrue={true} />
      <Code task="isTrue are false" isTrue={false} />
    </>
  );
}

export default App;
