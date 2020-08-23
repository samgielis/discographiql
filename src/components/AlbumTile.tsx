import React from "react";
import { Album } from "../DataModel";
import { Box, Heading, BoxProps } from "@chakra-ui/core";
import ElegantImage from "./ElegantImage";
import { defaultResponsiveMargin } from "../DefaultTheme";

interface AlbumTileProps extends BoxProps {
  album: Album;
}

export function AlbumTile({ album, maxW }: AlbumTileProps) {
  const { name, image } = album;
  return (
    <Box textAlign="center" maxW={maxW}>
      <ElegantImage src={image} alt={name} ratio={1} />
      <Heading size="md" mx={0} my={defaultResponsiveMargin}>
        {name}
      </Heading>
    </Box>
  );
}
