import { useReducer } from "react";
// defined state for reducer
const initalState = {
  counter: 0,
};
// defined actions for reducer
type ActionCounterForReducer =
  | { type: "increase" }
  | { type: "decrease" }
  | { type: "custom"; payload: number };

/* retorna el estado, switch es el habitual. useReducer siempre retorna un  nuevo estado. Por prevención y defecto, retornar el state tras bucle */
const counterReducer = (
  state: typeof initalState,
  action: ActionCounterForReducer
) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrease":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "custom":
      return {
        ...state,
        counter: action.payload,
      };
    default:
      return state;
  }
};

const CounterRed = () => {
  // state + disparar acciones
  const [counterState, dispatch] = useReducer(counterReducer, initalState);
  return (
    <>
      <h4>Counter: {counterState.counter}</h4>
      <button
        className="btn btn-outline-warning btn-lg m-t2"
        onClick={() => dispatch({ type: "increase" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-warning btn-lg m-t2"
        onClick={() => dispatch({ type: "decrease" })}
      >
        -1
      </button>
      <button
        className="btn btn-outline-secondary btn-lg m-t2"
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        100
      </button>
    </>
  );
};
export default CounterRed;
