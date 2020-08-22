import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider, Heading, CSSReset } from "@chakra-ui/core";
import { SearchBar } from "./components/SearchBar";
import { ArtistSearchOverview } from "./components/ArtistSearchOverview";

const client = new ApolloClient({
  uri: "https://spotify-graphql-server.herokuapp.com/graphql?",
  cache: new InMemoryCache(),
});

function App() {
  const [query, setQuery] = useState("");
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <CSSReset />
        <Heading>DiscographiQL</Heading>
        <SearchBar onQueryEntered={setQuery} />
        {!!query ? <ArtistSearchOverview query={query} /> : <div />}
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
