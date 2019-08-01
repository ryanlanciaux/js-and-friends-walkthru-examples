import React, { useState, useRef } from "react";

/* 
In this example we want to alert the input value.

1) Start by hooking up to state and controlling the input field

2) That works well BUT may not be what we want and there's an easier way

3) Create a ref, hook it up to the input

4) change the alert to use someRef.current.value

*/
function Refs() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label for="searchBox">Search</label>
      <input type="text" name="searchBox" />
      <button
        onClick={() => {
          alert("some value");
        }}
      >
        Click this
      </button>
    </div>
  );
}

export default Refs;
