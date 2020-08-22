import React from "react";
import { Spinner, Text, Box, IconButton } from "@chakra-ui/core";
import { Artist, ArtistWithDiscography, NamedNode } from "../../DataModel";
import { useQuery, gql } from "@apollo/client";
import ArtistProfile from "../ArtistProfile";

const ARTISTPAGE = gql`
  query ArtistPage($fullName: String!) {
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

interface ArtistPageQueryResults {
  queryArtists: ArtistWithDiscography<NamedNode>[];
}

interface ArtistPageProps {
  artist: Artist;
  onNavigateBack: () => void;
}

export function ArtistPage({ artist, onNavigateBack }: ArtistPageProps) {
  const { loading, error, data } = useQuery<ArtistPageQueryResults>(
    ARTISTPAGE,
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
        Something went wrong fetching this artist's profile. Please try again
        later.
      </Text>
    );
  }

  if (data && data.queryArtists.length > 0) {
    const artistWithDiscography = data.queryArtists.find((possibleMatch) => {
      return possibleMatch.id === artist.id;
    });

    if (artistWithDiscography) {
      let augmentedArtist = { ...artist, ...artistWithDiscography };
      return (
        <Box>
          <Box>
            <NavigateBackButton onNavigateBack={onNavigateBack} />
            <ArtistProfile artist={augmentedArtist} />
          </Box>
        </Box>
      );
    }
  }

  return <Text>No search results.</Text>;
}

function NavigateBackButton({
  onNavigateBack,
}: {
  onNavigateBack: () => void;
}) {
  return (
    <Box pos="absolute" zIndex={1}>
      <IconButton
        aria-label="Back to search"
        icon="arrow-back"
        onClick={onNavigateBack}
        variant="ghost"
        size="lg"
        color="white"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
      />
    </Box>
  );
}
