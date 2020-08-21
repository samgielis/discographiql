import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { DummyQuery } from "./components/DummyQuery";

const client = new ApolloClient({
  uri: "https://spotify-graphql-server.herokuapp.com/graphql?",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>DiscographiQL</h1>
      <DummyQuery />
    </ApolloProvider>
  );
}

export default App;
