import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet/index.scss";
import App from "./components/App";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
});

// const CharacterQuery = () => {

//     const { {loading}:{loading:object}, {error}:{error:object}, {data}:{data:Array} };

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;

//   return data.characters.results.map((character: string | number) => {
//     return

//       <div key={character.id}>
//         <p>
//           {character.name}
//         </p>
//       </div>
//     )});
//   }
//   return (
//     <Query
//       query={gql`
//         {
//           characters {
//             results {
//               id
//               name
//               image
//             }
//           }
//         }
//       `}
//     >
//     </Query>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
      {/* <CharacterQuery /> */}
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
