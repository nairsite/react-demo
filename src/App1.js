import React from "react";
import "./App1.css"
import Home from "./Home";
export default function App1() {
  return (
    <>
      <div className="dv">Hello World</div>
      <div>Good Afternoon</div>
      <p>This is a paragraph. I am new to HTML.</p>
      <Home  name="John" age={30} />
    </>
  );
}
