import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider, Heading, CSSReset, Box } from "@chakra-ui/core";
import { SearchBar } from "./components/SearchBar";
import { ArtistSearchOverview } from "./components/ArtistSearchOverview";
import { defaultResponsiveMargin } from "./DefaultTheme";

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
        <Box m={defaultResponsiveMargin}>
          <Heading>DiscographiQL</Heading>
          <SearchBar onQueryEntered={setQuery} />
          {!!query ? <ArtistSearchOverview query={query} /> : <div />}
        </Box>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
