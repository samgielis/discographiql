import React from "react";
import { Album } from "../DataModel";
import { Box, Heading, BoxProps, Link, PseudoBox } from "@chakra-ui/core";
import ElegantImage from "./ElegantImage";
import { defaultResponsiveMargin } from "../DefaultTheme";
import { FaSpotify } from "react-icons/fa";

interface AlbumTileProps extends BoxProps {
  album: Album;
}

export function AlbumTile({ album, maxW }: AlbumTileProps) {
  const { name, image } = album;
  return (
    <Box textAlign="center" maxW={maxW}>
      <Box pos="relative">
        <Link
          href={`https://open.spotify.com/album/${album.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <ElegantImage src={image} alt={name} ratio={1} />
          <SpotifyLogoOverlay />
        </Link>
      </Box>
      <Heading size="md" mx={0} my={defaultResponsiveMargin}>
        {name}
      </Heading>
    </Box>
  );
}

function SpotifyLogoOverlay() {
  return (
    <PseudoBox
      w="100%"
      h="100%"
      pos="absolute"
      top={0}
      bg="black"
      opacity={0}
      _hover={{ opacity: 0.7 }}
      transition="opacity .3s"
    >
      <Box
        as={FaSpotify}
        fontSize="4rem"
        margin="auto"
        color="green.400"
        height="100%"
      />
    </PseudoBox>
  );
}
