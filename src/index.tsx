import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const message: string = "A new Message!"; // This is a type error!

ReactDOM.render(<App message={message} />, document.getElementById("root"));
