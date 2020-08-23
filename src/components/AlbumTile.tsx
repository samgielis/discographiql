import React from "react";
import { Album } from "../DataModel";
import { Box, Heading, BoxProps, Link } from "@chakra-ui/core";
import ElegantImage from "./ElegantImage";
import { defaultResponsiveMargin } from "../DefaultTheme";

interface AlbumTileProps extends BoxProps {
  album: Album;
}

export function AlbumTile({ album, maxW }: AlbumTileProps) {
  const { name, image } = album;
  return (
    <Box textAlign="center" maxW={maxW}>
      <Link
        href={`https://open.spotify.com/album/${album.id}`}
        target="_blank"
        rel="noreferrer"
      >
        <ElegantImage src={image} alt={name} ratio={1} />
      </Link>
      <Heading size="md" mx={0} my={defaultResponsiveMargin}>
        {name}
      </Heading>
    </Box>
  );
}
