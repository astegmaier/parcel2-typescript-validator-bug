import React from "react";
import ReactDOM from "react-dom";

const message: string = "Hello World123!";

const App = () => <div>{message}</div>

ReactDOM.render(<App />, document.getElementById("root"));
