import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  // valor 1 por defecto
  const increaseCounter = (number: number = 1) => {
    console.log(counter);
    setCounter(counter + number);
  };

  return (
    <>
      <div className="mt-2">
        <h4>Counter</h4>
        <p>Valor: {counter}</p>
        <button
          className="btn btn-outline-primary m-t2"
          onClick={() => increaseCounter()}
        >
          +1
        </button>
        <button
          className="btn btn-outline-primary m-t2"
          onClick={() => increaseCounter(2)}
        >
          +2
        </button>
        <button
          className="btn btn-outline-danger m-t2"
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
};

// type CounterProps = {
//   handleCounter: Function;
//   // handleResetCounter: Function;
//   // counter: number;
// };

export default Counter;
