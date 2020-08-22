import React from "react";
import { Box, IconButton } from "@chakra-ui/core";
import { Artist } from "../../DataModel";
import ArtistProfile from "../ArtistProfile";

interface ArtistPageProps {
  artist: Artist;
  onNavigateBack: () => void;
}

export function ArtistPage({ artist, onNavigateBack }: ArtistPageProps) {
  return (
    <Box>
      <Box>
        <NavigateBackButton onNavigateBack={onNavigateBack} />
        <ArtistProfile artist={artist} />
      </Box>
    </Box>
  );
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
