import React from "react";
import { Artist } from "../DataModel";
import { Box, Flex, Heading, Image } from "@chakra-ui/core";

interface ArtistHeaderProps {
  artist: Artist;
}

export default function ArtistHeader({ artist }: ArtistHeaderProps) {
  return (
    <Box w="100%" overflow="hidden" backgroundColor="gray.600" pos="relative">
      <Image
        src={artist.image}
        objectFit="cover"
        w="100%"
        h="30vh"
        opacity={0.2}
        style={{ filter: "blur(3px)" }}
      />
      <Flex
        pos="absolute"
        alignItems="center"
        justify="center"
        w="100%"
        h="100%"
        top={0}
      >
        <Heading size="2xl" color="white">
          {artist.name}
        </Heading>
      </Flex>
    </Box>
  );
}
