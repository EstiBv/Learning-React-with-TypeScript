import React from "react";
import "./App.scss";
import { useState } from "react";
// Components
import Counter from "./useState/Counter";
import User from "./useState/User";
import IUser from "./useState/interface/interface";
import TimerParent from "./useEffRef/TimerParent";
import CounterRed from "./useRed/CounterRed";

const App: React.FC = () => {
  const [user, setUser] = useState<IUser>();

  // events
  const handleUser = () => {
    setUser({
      uid: "AEIOU",
      name: "Falopia Moroño",
    });
  };

  return (
    <React.Fragment>
      <header className="mt-5">
        <h1>TypeScript and React </h1>
        <hr />
      </header>
      <main className="mt-5">
        <section>
          <h2>UseState</h2>
          <Counter />
          <User user={user} handleUser={handleUser} />
          <hr />
        </section>
        <section>
          <h2>UseEffect - UseRef</h2>
          <TimerParent />
          <hr />
        </section>
        <section>
          <h2>UseReducer</h2>
          <CounterRed />
          <hr />
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
