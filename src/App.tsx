import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider, Heading, CSSReset, Box } from "@chakra-ui/core";
import { SearchBar } from "./components/SearchBar";
import { ArtistSearchOverview } from "./components/ArtistSearchOverview";
import { defaultResponsiveMargin } from "./DefaultTheme";
import { ArtistDiscographyOverview } from "./components/ArtistDiscographyOverview";
import { Artist } from "./DataModel";

const client = new ApolloClient({
  uri: "https://spotify-graphql-server.herokuapp.com/graphql?",
  cache: new InMemoryCache(),
});

function App() {
  const [query, setQuery] = useState("");
  const [artist, setArtist] = useState<Artist | undefined>(undefined);
  const handleQueryEntered = (query: string) => {
    setArtist(undefined);
    setQuery(query);
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <CSSReset />
        <Box m={defaultResponsiveMargin}>
          <Heading>DiscographiQL</Heading>
          <SearchBar onQueryEntered={handleQueryEntered} />
          {!!query ? (
            <ArtistSearchOverview query={query} onArtistSelected={setArtist} />
          ) : (
            <div />
          )}
          {!!artist ? <ArtistDiscographyOverview artist={artist} /> : <div />}
        </Box>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
