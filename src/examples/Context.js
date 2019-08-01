import React, { createContext, useContext, useState } from "react";

/*
  In this one, we want to update the count w/out threading the props
  Contrived example normally we would pass props through in this scenario

  1) Create a context, CounterContext

  2) Wrap the fragment in counter app with the CounterContext.Provider
     Pass count and setCount as the value to the provider

  3) Update the Counter to use the context instead of the function

*/

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <Layout />
    </>
  );
}

function Layout() {
  return (
    <div
      style={{
        backgroundColor: "#EDEDED",
        padding: 30,
        width: 480,
        margin: "auto 0"
      }}
    >
      <Counter />
    </div>
  );
}

function Counter() {
  const { setCount } = () => {};

  return (
    <>
      <span>Click this button to increase the count</span>
      <button onClick={() => setCount(count => count + 1)}>Add count</button>
    </>
  );
}

export default CounterApp;
