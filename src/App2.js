import React from "react";

export default function App2() {
    function greet() {
      alert("Hello")  
    }
  return (
    <div>
      <button onClick={greet}>Click</button>
    </div>
  );
}
