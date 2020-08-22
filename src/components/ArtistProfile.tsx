import React from "react";
import { Artist } from "../DataModel";
import { Box } from "@chakra-ui/core";
import ArtistHeader from "./ArtistHeader";
import ArtistDiscography from "./ArtistDiscography";

interface ArtistProfileProps {
  artist: Artist;
}

export default function ArtistProfile({ artist }: ArtistProfileProps) {
  return (
    <Box minH="100vh">
      <ArtistHeader artist={artist} />
      <ArtistDiscography artist={artist} />
    </Box>
  );
}
