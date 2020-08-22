import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Text, Spinner, SimpleGrid, Box, Heading } from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../DefaultTheme";
import ElegantImage from "./ElegantImage";

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
  queryArtists: {
    id: string;
    name: string;
    image: string;
  }[];
}

interface ArtistSearchOverviewProps {
  query: string;
}

export function ArtistSearchOverview({ query }: ArtistSearchOverviewProps) {
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
      {data.queryArtists.map(({ id, name, image }) => (
        <Box key={id} textAlign="center">
          <ElegantImage src={image} alt={name} ratio={1} maxW="400px" />
          <Heading size="sm" m={defaultResponsiveMargin}>
            {name}
          </Heading>
        </Box>
      ))}
    </SimpleGrid>
  );
}
