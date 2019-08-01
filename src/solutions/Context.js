import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext({ count: 0 });

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <>
        <h1>Count: {count}</h1>
        <Layout />
      </>
    </CounterContext.Provider>
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
  const { setCount } = useContext(CounterContext);

  return (
    <>
      <span>Click this button to increase the count</span>
      <button onClick={() => setCount(count => count + 1)}>Add count</button>
    </>
  );
}

export default CounterApp;
