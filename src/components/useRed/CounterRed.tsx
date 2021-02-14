import { useReducer } from "react";

const initalState = {
  counter: 0,
};
// definir acciones
type ActionCounterForReducer = {
  type: "increase";
};

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
    default:
      return state;
  }
};

const CounterRed = () => {
  // state + disparar acciones
  const [counterState, dispatch] = useReducer(counterReducer, initalState);
  return <h4>Counter: {counterState.counter}</h4>;
};
export default CounterRed;
