import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="card">
      <h2>Counter</h2>

      <p className="counter">{count}</p>

      <div className="btn-group">
        <button onClick={() => setCount(prev => prev - 1)}>
          -
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

        <button  onClick={() => setCount(prev => prev + 1)}>
          +
        </button>
      </div>
    </section>
  );
}

export default Counter;