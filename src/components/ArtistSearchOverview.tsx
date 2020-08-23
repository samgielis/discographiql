import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Text, Spinner, SimpleGrid } from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../DefaultTheme";
import { NamedNodeWithImage, Artist } from "../DataModel";
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
}

export function ArtistSearchOverview({
  query,
  onArtistSelected,
}: ArtistSearchOverviewProps) {
  const { loading, error, data } = useQuery<ArtistQueryResult>(ARTISTS, {
    variables: { partialName: query },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text>Something went wrong. Please try again later.</Text>;
  }

  if (!data || data.queryArtists.length === 0) {
    return <Text>No search results.</Text>;
  }

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
