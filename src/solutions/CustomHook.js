import React, { useEffect, useState } from "react";

/*
  For this example we want to make both boxes move

  We could copy the useEffect statement to both but that's less than ideal

  We need to abstract that functionality to a custom hook `useMovement`

  useMovement should receive start position.
  All the state and useEffect data should move into this custom hook.
  The result of the hook should be an x position
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
      <OtherBox />
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

function useMovement(startPosition = 0) {
  const [x, setX] = useState(startPosition);

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

  return x;
}

function Box() {
  const x = useMovement(0);

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

function OtherBox() {
  const x = useMovement(550);

  return (
    <div
      style={{
        backgroundColor: "rgba(255, 0, 0, .4)",
        height: 32,
        width: 32,
        position: "absolute",
        bottom: 180,
        left: x
      }}
    />
  );
}

export default Scene;
