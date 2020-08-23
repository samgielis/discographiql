import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { NamedNode, ArtistWithDiscography, Artist } from "../DataModel";
import { Spinner, Text, Box, SimpleGrid, Heading } from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../DefaultTheme";
import ElegantImage from "./ElegantImage";
import {
  DEFAULT_FILTER_CONFIG,
  FilterConfiguration,
  filterNodes,
} from "../FilterUtils";
import FilterToolBar from "./FilterToolBar";

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

  const [filterConfig, setFilterConfig] = useState<FilterConfiguration>(
    DEFAULT_FILTER_CONFIG
  );

  let queryVisualization = <Text>No search results.</Text>;
  if (loading) {
    queryVisualization = <Spinner />;
  } else if (error) {
    queryVisualization = (
      <Text>
        Something went wrong fetching this artist's discography. Please try
        again later.
      </Text>
    );
  } else if (data && data.queryArtists.length > 0) {
    /* It's not possible to query the server for an artist by id directly.
      We need to query by name and then filter by id on the client side. */
    const artistWithDiscography = data.queryArtists.find((possibleMatch) => {
      return possibleMatch.id === artist.id;
    });

    if (artistWithDiscography) {
      let filteredDiscography = filterNodes(
        artistWithDiscography.albums,
        filterConfig
      );

      queryVisualization = (
        <SimpleGrid
          columns={{ base: 2, sm: 3, lg: 5 }}
          spacing={defaultResponsiveMargin}
        >
          {filteredDiscography.map(({ id, name, image }) => (
            <Box key={id} textAlign="center" maxW="400px">
              <ElegantImage src={image} alt={name} ratio={1} />
              <Heading size="md" mx={0} my={defaultResponsiveMargin}>
                {name}
              </Heading>
            </Box>
          ))}
        </SimpleGrid>
      );
    }
  }

  return (
    <Box textAlign="center" margin={defaultResponsiveMargin}>
      <Box my={10}>
        <Heading m={defaultResponsiveMargin}>Discography</Heading>
        <FilterToolBar
          config={filterConfig}
          onFilterConfigChanged={setFilterConfig}
        />
      </Box>
      {queryVisualization}
    </Box>
  );
}
