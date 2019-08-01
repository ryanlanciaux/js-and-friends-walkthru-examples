import React, { useEffect, useState } from "react";

/*
  In this one, we're going to start out with a scene and a block
  We want this block to move but we need to interact with the keyboard 
  which is a side-effect to something happening within React

  

*/
function Scene() {
  return (
    <div
      style={{
        backgroundColor: "blue",
        width: 640,
        height: 480,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Box />
      <div
        style={{
          backgroundColor: "green",
          position: "absolute",
          bottom: 0,
          height: 180,
          width: "100%"
        }}
      />
    </div>
  );
}

function Box() {
  const [x, setX] = useState(0);

  useEffect(function() {
    function keyHandler(e) {
      if (e.key === "ArrowRight") {
        setX(x => (x < 639 ? x + 5 : 0));
      }

      if (e.key === "ArrowLeft") {
        setX(x => (x > 0 ? x - 5 : 639));
      }
    }

    window.addEventListener("keydown", keyHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "red",
        height: 64,
        width: 64,
        position: "absolute",
        bottom: 180,
        left: x
      }}
    />
  );
}

export default Scene;
