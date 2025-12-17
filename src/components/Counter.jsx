import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div
      style={{
        backgroundColor: "yellow",
        padding: "20px",
        textAlign: "center",
        margin: 0,
      }}
    >
      <h1 style={{ margin: "0 0 10px 0", color: "black" }}>Count: {count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "grey",
          color: "white",
          border: "none",
          padding: "10px 20px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        Increase
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{
          backgroundColor: "grey",
          color: "white",
          border: "none",
          padding: "10px 20px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;


