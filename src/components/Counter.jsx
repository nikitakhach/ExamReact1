import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("მრიცხველი ჩაიტვირთა");
  }, []);

    return (
      <div>
        <>
          <h2>მრიცხველი: {count}</h2>
          <button onClick={() => setCount((prev) => prev + 1)}>გაზრდა</button>
          <button onClick={() => setCount(0)}>განულება</button>
          <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
            შემცირება
          </button>
        </>
      </div>
    );
}
