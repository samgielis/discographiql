import React from "react";
import { Box, Spinner, Text, SimpleGrid, Heading } from "@chakra-ui/core";
import { gql, useQuery } from "@apollo/client";
import { defaultResponsiveMargin } from "../DefaultTheme";
import ElegantImage from "./ElegantImage";
import { NamedNode, ArtistWithDiscography, Discography } from "../DataModel";

const DISCOGRAPHY = gql`
  query Discography($fullName: String!) {
    queryArtists(byName: $fullName) {
      id
      name
      albums {
        id
        name
        image
      }
    }
  }
`;

interface DiscographyQueryResults {
  queryArtists: ArtistWithDiscography[];
}

interface ArtistDiscographyOverviewProps {
  artist: NamedNode;
}

function getMatchingArtistDiscography(
  result: DiscographyQueryResults,
  artistId: string
): Discography | undefined {
  const matchingArtist = result.queryArtists.find((artist) => {
    return artist.id === artistId;
  });

  if (matchingArtist) {
    return matchingArtist.albums;
  }
}

export function ArtistDiscographyOverview({
  artist,
}: ArtistDiscographyOverviewProps) {
  const { loading, error, data } = useQuery<DiscographyQueryResults>(
    DISCOGRAPHY,
    {
      variables: { fullName: artist.name },
    }
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text>Something went wrong. Please try again later.</Text>;
  }

  if (data && data.queryArtists.length > 0) {
    const discography = getMatchingArtistDiscography(data, artist.id);
    if (discography) {
      return (
        <Box>
          <Heading size="sm" m={defaultResponsiveMargin}>
            {artist.name}'s Discography
          </Heading>
          <SimpleGrid
            columns={{ base: 2, sm: 3, lg: 5 }}
            spacing={defaultResponsiveMargin}
          >
            {discography.map(({ id, name, image }) => (
              <Box key={id} textAlign="center">
                <ElegantImage src={image} alt={name} ratio={1} maxW="400px" />
                <Heading size="md" mx={0} my={defaultResponsiveMargin}>
                  {name}
                </Heading>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      );
    }
  }

  return <Text>No search results.</Text>;
}
