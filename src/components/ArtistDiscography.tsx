import React from "react";
import { gql, useQuery } from "@apollo/client";
import { NamedNode, ArtistWithDiscography, Artist } from "../DataModel";
import { Spinner, Text, Box, SimpleGrid, Heading } from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../DefaultTheme";
import ElegantImage from "./ElegantImage";

const ARTISTDISCOGRAPHY = gql`
  query ArtistPage($fullName: String!) {
    queryArtists(byName: $fullName) {
      id
      albums {
        id
        name
        image
      }
    }
  }
`;

interface ArtistDiscographyQueryResults {
  queryArtists: ArtistWithDiscography<NamedNode>[];
}

interface ArtistDiscographyProps {
  artist: Artist;
}

export default function ArtistDiscography({ artist }: ArtistDiscographyProps) {
  const { loading, error, data } = useQuery<ArtistDiscographyQueryResults>(
    ARTISTDISCOGRAPHY,
    {
      variables: { fullName: artist.name },
    }
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Text>
        Something went wrong fetching this artist's discography. Please try again
        later.
      </Text>
    );
  }

  if (data && data.queryArtists.length > 0) {
    const artistWithDiscography = data.queryArtists.find((possibleMatch) => {
      return possibleMatch.id === artist.id;
    });

    if (artistWithDiscography) {
      return (
        <SimpleGrid
          columns={{ base: 2, sm: 3, lg: 5 }}
          spacing={defaultResponsiveMargin}
          margin={defaultResponsiveMargin}
        >
          {artistWithDiscography.albums.map(({ id, name, image }) => (
            <Box key={id} textAlign="center">
              <ElegantImage src={image} alt={name} ratio={1} maxW="400px" />
              <Heading size="md" mx={0} my={defaultResponsiveMargin}>
                {name}
              </Heading>
            </Box>
          ))}
        </SimpleGrid>
      );
    }
  }

  return <Text>No search results.</Text>;
}
