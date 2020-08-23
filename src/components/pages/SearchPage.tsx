import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import { SearchBar } from "../SearchBar";
import { ArtistSearchOverview } from "../ArtistSearchOverview";
import { Artist, SearchState } from "../../DataModel";
import { PageHeader } from "../PageHeader";
import SearchStateView from "../SearchStateView";

interface SearchPageProps {
  showing: boolean;
  onArtistSelected: (artist: Artist | undefined) => any;
}

export function SearchPage({ showing, onArtistSelected }: SearchPageProps) {
  const [query, setQuery] = useState("");
  const [searchState, setSearchState] = useState<SearchState>("idle");
  const handleQueryEntered = (query: string) => {
    if (!query) {
      setSearchState("idle");
    }
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
          onSearchStateChange={setSearchState}
        />
      )}
      <SearchStateView searchState={searchState} />
    </Box>
  );
}

interface SearchHeaderProps {
  handleQueryEntered: (query: string) => any;
}

function SearcHeader({ handleQueryEntered }: SearchHeaderProps) {
  return (
    <PageHeader title="DiscographiQL" color="brand.accent">
      <SearchBar onQueryEntered={handleQueryEntered} />
    </PageHeader>
  );
}
