import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import { SearchBar } from "../SearchBar";
import { ArtistSearchResult } from "../ArtistSearchResult";
import { Artist, QueryData, NamedNodeWithImage } from "../../DataModel";
import { PageHeader } from "../PageHeader";
import QueryResultWrapper, { SearchPlaceholder } from "../QueryResultWrapper";
import { gql, useQuery } from "@apollo/client";

const ARTISTS = gql`
  query Artists($partialName: String!) {
    queryArtists(byName: $partialName) {
      id
      name
      image
    }
  }
`;

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
      {!!query ? (
        <QueryWrapper query={query} onArtistSelected={onArtistSelected} />
      ) : (
        <SearchPlaceholder />
      )}
    </Box>
  );
}

interface QueryWrapperProps {
  query: string;
  onArtistSelected: (artist: Artist | undefined) => any;
}

function QueryWrapper({ query, onArtistSelected }: QueryWrapperProps) {
  const queryResult = useQuery<QueryData<NamedNodeWithImage>>(ARTISTS, {
    variables: { partialName: query },
  });

  return (
    <>
      {queryResult && queryResult.data && (
        <ArtistSearchResult
          data={queryResult.data}
          onArtistSelected={onArtistSelected}
        />
      )}
      <QueryResultWrapper queryResult={queryResult} />
    </>
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
