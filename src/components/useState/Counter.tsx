const Counter = (props: CounterProps) => {
  const increaseCounter = (number: number = 1) => {
    console.log(props);
    props.handleCounter(number);
  };

  const resetCounter = (number: number = 0) => {
    props.handleCounter(number);
    console.log("reset");
  };

  return (
    <>
      <div className="mt-2">
        <h4>Counter</h4>
        <p>Valor: {props.counter}</p>
        <button
          className="btn btn-outline-primary m-t2"
          onClick={() => increaseCounter(1)}
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
          onClick={() => resetCounter(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
};

type CounterProps = {
  handleCounter: Function;
  handleResetCounter: Function;
  counter: number;
};

export default Counter;
