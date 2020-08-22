import React from "react";
import { Spinner, Text } from "@chakra-ui/core";
import { gql, useQuery } from "@apollo/client";
import { NamedNode, ArtistWithDiscography, Artist } from "../DataModel";
import ArtistProfile from "./ArtistProfile";

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
  queryArtists: ArtistWithDiscography<NamedNode>[];
}

interface ArtistDiscographyOverviewProps {
  artist: Artist;
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
    const artistWithDiscography = data.queryArtists.find((possibleMatch) => {
      return possibleMatch.id === artist.id;
    });

    if (artistWithDiscography) {
      let augmentedArtist = { ...artist, ...artistWithDiscography };
      return <ArtistProfile artist={augmentedArtist} />;
    }
  }

  return <Text>No search results.</Text>;
}
