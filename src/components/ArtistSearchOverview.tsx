import React from "react";
import { gql, useQuery } from "@apollo/client";
import { SimpleGrid } from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../DefaultTheme";
import { NamedNodeWithImage, Artist, SearchState } from "../DataModel";
import { FaMicrophoneAlt } from "react-icons/fa";
import { Tile } from "./AlbumTile";

const ARTISTS = gql`
  query Artists($partialName: String!) {
    queryArtists(byName: $partialName) {
      id
      name
      image
    }
  }
`;

interface ArtistQueryResult {
  queryArtists: NamedNodeWithImage[];
}

interface ArtistSearchOverviewProps {
  query: string;
  onArtistSelected: (artist: Artist) => any;
  onSearchStateChange: (state: SearchState) => any;
}

export function ArtistSearchOverview({
  query,
  onArtistSelected,
  onSearchStateChange,
}: ArtistSearchOverviewProps) {
  const { loading, error, data } = useQuery<ArtistQueryResult>(ARTISTS, {
    variables: { partialName: query },
  });

  if (loading) {
    onSearchStateChange("loading");
  } else if (error) {
    onSearchStateChange("error");
  } else if (!data || data.queryArtists.length === 0) {
    onSearchStateChange("no results");
  } else {
    onSearchStateChange("completed")
    return (
      <SimpleGrid
        columns={{ base: 2, sm: 3, lg: 5 }}
        spacing={defaultResponsiveMargin}
        m={defaultResponsiveMargin}
      >
        {data.queryArtists.map((artist) => {
          const artistClickHandler = () => {
            onArtistSelected(artist);
          };
          return (
            <React.Fragment key={artist.id}>
              <Tile
                node={artist}
                maxW="400px"
                icon={FaMicrophoneAlt}
                onClick={artistClickHandler}
              />
            </React.Fragment>
          );
        })}
      </SimpleGrid>
    );
  }
  return <div />;
}
