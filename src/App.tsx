import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Artist } from "./DataModel";
import { SearchPage } from "./components/pages/SearchPage";
import { ArtistPage } from "./components/pages/ArtistPage";

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
      <ThemeProvider>
        <CSSReset />
        <SearchPage onArtistSelected={handleArtistSelected} showing={!artist} />
        {artist && (
          <ArtistPage
            artist={artist}
            onNavigateBack={() => {
              setArtist(undefined);
            }}
          />
        )}
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
