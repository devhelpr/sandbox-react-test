import React from "react";
import ReactDOM from "react-dom";

import Test from "./test";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>This was added to my github account as a simple test</h2>
      <Test />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
