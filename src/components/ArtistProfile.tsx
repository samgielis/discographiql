import React from "react";
import { ArtistWithDiscography, NamedNodeWithImage } from "../DataModel";
import { Box, Heading, SimpleGrid, Image, Flex } from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../DefaultTheme";
import ElegantImage from "./ElegantImage";
import ArtistHeader from "./ArtistHeader";

interface ArtistProfileProps {
  artist: ArtistWithDiscography<NamedNodeWithImage>;
}

export default function ArtistProfile({ artist }: ArtistProfileProps) {
  return (
    <Box minH="100vh">
      <ArtistHeader artist={artist} />
      <SimpleGrid
        columns={{ base: 2, sm: 3, lg: 5 }}
        spacing={defaultResponsiveMargin}
        margin={defaultResponsiveMargin}
      >
        {artist.albums.map(({ id, name, image }) => (
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
