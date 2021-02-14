import React from "react";
import "./App.scss";
import { useState } from "react";
// Components
import Counter from "./useState/Counter";
import User from "./useState/User";
import IUser from "./interface/interface";
import TimerParent from "./useEffRef/TimerParent";
import CounterRed from "./useRed/CounterRed";

const App = () => {
  // states component useState
  const [user, setUser] = useState<IUser>();
  const [counter, setCounter] = useState(0);

  // events
  const handleUser = () => {
    setUser({
      uid: "AEIOU",
      name: "Falopia Moroño",
    });
  };

  const handleCounter = (number: number) => {
    setCounter(counter + number);
  };

  const handleResetCounter = (number: number) => {
    setCounter(0);
  };

  return (
    <React.Fragment>
      <h1 className="mt-5">TypeScript and React </h1>
      <hr />
      <h2>UseState</h2>
      <Counter
        counter={counter}
        handleCounter={handleCounter}
        handleResetCounter={handleResetCounter}
      />
      <User user={user} handleUser={handleUser} />
      <hr />
      <h2>UseEffect - UseRef</h2>
      <TimerParent />
      <hr />
      <h2>UseReducer</h2>
      <CounterRed />
    </React.Fragment>
  );
};

export default App;
