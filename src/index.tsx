import React from "react";
import ReactDOM from "react-dom";

const message: number = "Hello World"; // This is a type error!

const App = () => <div>{message}</div>

ReactDOM.render(<App />, document.getElementById("root"));
