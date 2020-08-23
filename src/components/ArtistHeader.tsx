import React from "react";
import { Artist } from "../DataModel";
import { Box, Stack, Heading, Image } from "@chakra-ui/core";
import { FaSpotify } from "react-icons/fa";
import LinkButton from "./LinkButton";

interface ArtistHeaderProps {
  artist: Artist;
}

export default function ArtistHeader({ artist }: ArtistHeaderProps) {
  return (
    <Box w="100%" overflow="hidden" backgroundColor="#2e2e2e" pos="relative">
      <Image
        src={artist.image}
        objectFit="cover"
        w="100%"
        h="30vh"
        opacity={0.2}
        style={{ filter: "blur(3px)" }}
      />
      <Stack
        pos="absolute"
        alignItems="center"
        justify="center"
        w="100%"
        h="100%"
        top={0}
        spacing={3}
      >
        <Heading size="2xl" color="white">
          {artist.name}
        </Heading>
        <LinkButton
          backgroundColor="green.400"
          href={`https://open.spotify.com/artist/${artist.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <Box as={FaSpotify} mr=".5em" fontSize="1.2em" />
          Listen
        </LinkButton>
      </Stack>
    </Box>
  );
}
