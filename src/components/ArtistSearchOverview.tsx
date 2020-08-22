import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  Image,
  Text,
  Spinner,
  SimpleGrid,
  AspectRatioBox,
} from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../DefaultTheme";

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
  id: string;
  name: string;
  image: string;
}

interface ArtistSearchOverviewProps {
  query: string;
}

export function ArtistSearchOverview({ query }: ArtistSearchOverviewProps) {
  const { loading, error, data } = useQuery(ARTISTS, {
    variables: { partialName: query },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text>Something went wrong. Please try again later.</Text>;
  }

  return (
    <SimpleGrid columns={{ base: 2, sm: 3, lg: 5 }} spacing={defaultResponsiveMargin}>
      {data.queryArtists.map(({ id, name, image }: ArtistQueryResult) => (
        <div key={id}>
          <AspectRatioBox maxW="400px" ratio={1}>
            <Image src={image} alt={name} objectFit="cover" />
          </AspectRatioBox>
          <p>{name}</p>
        </div>
      ))}
    </SimpleGrid>
  );
}
