import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import { SearchBar } from "../SearchBar";
import { ArtistSearchOverview } from "../ArtistSearchOverview";
import { Artist } from "../../DataModel";
import { PageHeader } from "../PageHeader";

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
    <Box d={showing ? "block" : "none"}>
      <SearcHeader handleQueryEntered={handleQueryEntered} />
      {!!query && (
        <ArtistSearchOverview
          query={query}
          onArtistSelected={onArtistSelected}
        />
      )}
    </Box>
  );
}

interface SearchHeaderProps {
  handleQueryEntered: (query: string) => any;
}

function SearcHeader({ handleQueryEntered }: SearchHeaderProps) {
  return (
    <PageHeader
      title="DiscographiQL"
      imageSrc={process.env.PUBLIC_URL + "/header.png"}
      color="brand.accent"
    >
      <SearchBar onQueryEntered={handleQueryEntered} />
    </PageHeader>
  );
}
