import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Text, Spinner, SimpleGrid, Box, Heading } from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../DefaultTheme";
import ElegantImage from "./ElegantImage";
import { NamedNodeWithImage, Artist } from "../DataModel";

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
    >
      {data.queryArtists.map((artist) => {
        const artistClickHandler = () => {
          onArtistSelected(artist);
        };
        return (
          <Box
            key={artist.id}
            textAlign="center"
            onClick={artistClickHandler}
            cursor="pointer"
          >
            <ElegantImage
              src={artist.image}
              alt={artist.name}
              ratio={1}
              maxW="400px"
            />
            <Heading size="sm" m={defaultResponsiveMargin}>
              {artist.name}
            </Heading>
          </Box>
        );
      })}
    </SimpleGrid>
  );
}
