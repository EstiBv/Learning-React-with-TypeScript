import React from "react";
import "./App.scss";
import { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Counter from "./useState/Counter";
import User from "./useState/User";
import IUser from "./useState/interface/interface";
import TimerParent from "./useEffRef/TimerParent";
import CounterRed from "./useRed/CounterRed";
import Form from "./form/Form";

// // graph
// import { gql } from "apollo-boost";
// import { Query } from "react-apollo";

// interface Characters
// interface ICharacter {
//   uid: String;
//   name: String;
//   id: number;
//   photo: string;
//   description: string;
//   total_episodes: number;
//   key: number | String;
//   characters: [];
// }

function App(): JSX.Element {
  const [user, setUser] = useState<IUser>();

  // events
  const handleUser = () => {
    setUser({
      uid: "AEIOU",
      name: "Falopia Moroño",
    });
  };
  // // query
  // const CharacterQuery: React.FC = (props: any) => {
  //   return (
  //     <Query
  //       query={gql`
  //         {
  //           characters {
  //             id
  //             name
  //             description
  //             total_episodes
  //           }
  //         }
  //       `}
  //     >
  //       {props.children}
  //     </Query>
  //   );
  // };

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
      <aside>
        <Form />
        <hr />
      </aside>
    </React.Fragment>
  );
}

export default App;
