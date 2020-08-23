import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { Artist } from "./DataModel";
import { SearchPage } from "./components/pages/SearchPage";
import { ArtistPage } from "./components/pages/ArtistPage";
import DefaultTheme from "./DefaultTheme";

const client = new ApolloClient({
  uri: "https://spotify-graphql-server.herokuapp.com/graphql?",
  cache: new InMemoryCache(),
});

function App() {
  const [artist, setArtist] = useState<Artist | undefined>(undefined);
  const handleArtistSelected = (artist: Artist | undefined) => {
    setArtist(artist);
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={DefaultTheme}>
        <CSSReset />
        <Box bg="brand.mediumlight" minH="100vh">
          <SearchPage
            onArtistSelected={handleArtistSelected}
            showing={!artist}
          />
          {artist && (
            <ArtistPage
              artist={artist}
              onNavigateBack={() => {
                setArtist(undefined);
              }}
            />
          )}
        </Box>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
