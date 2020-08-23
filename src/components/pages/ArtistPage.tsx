import React from "react";
import { Box, IconButton } from "@chakra-ui/core";
import { Artist } from "../../DataModel";
import ArtistHeader from "../ArtistHeader";
import ArtistDiscography from "../ArtistDiscography";

interface ArtistPageProps {
  artist: Artist;
  onNavigateBack: () => void;
}

export function ArtistPage({ artist, onNavigateBack }: ArtistPageProps) {
  return (
    <Box>
      <NavigateBackButton onNavigateBack={onNavigateBack} />
      <ArtistHeader artist={artist} />
      <ArtistDiscography artist={artist} />
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
        color="brand.light"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
      />
    </Box>
  );
}
