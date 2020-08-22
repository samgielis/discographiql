import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../../DefaultTheme";
import { SearchBar } from "../SearchBar";
import { ArtistSearchOverview } from "../ArtistSearchOverview";
import { Artist } from "../../DataModel";

interface SearchPageProps {
  showing: boolean;
  onArtistSelected: (artist: Artist | undefined) => any;
}

export function SearchPage({ showing, onArtistSelected }: SearchPageProps) {
  const [query, setQuery] = useState("");
  const handleQueryEntered = (query: string) => {
    onArtistSelected(undefined);
    setQuery(query);
  };

  return (
    <Box d={showing ? "block" : "none"} m={defaultResponsiveMargin}>
      <Heading>DiscographiQL</Heading>
      <SearchBar onQueryEntered={handleQueryEntered} />
      {!!query && (
        <ArtistSearchOverview
          query={query}
          onArtistSelected={onArtistSelected}
        />
      )}
    </Box>
  );
}
