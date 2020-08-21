import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider, Heading, CSSReset } from "@chakra-ui/core";
import { DummyQuery } from "./components/DummyQuery";

const client = new ApolloClient({
  uri: "https://spotify-graphql-server.herokuapp.com/graphql?",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <CSSReset />
        <Heading> DiscographiQL</Heading>
      </ThemeProvider>
      ;
    </ApolloProvider>
  );
}

export default App;
