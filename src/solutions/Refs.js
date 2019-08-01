import React, { useRef } from "react";

function Refs() {
  const input = useRef();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label for="searchBox">Search</label>
      <input type="text" name="searchBox" ref={input} />
      <button
        onClick={() => {
          alert(input.current.value);
        }}
      >
        Click this
      </button>
    </div>
  );
}

export default Refs;
