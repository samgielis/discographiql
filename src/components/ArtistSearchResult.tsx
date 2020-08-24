import React from "react";
import { SimpleGrid } from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../DefaultTheme";
import { NamedNodeWithImage, Artist, QueryData } from "../DataModel";
import { FaMicrophoneAlt } from "react-icons/fa";
import { Tile } from "./AlbumTile";

interface ArtistSearchResultProps {
  data: QueryData<NamedNodeWithImage>;
  onArtistSelected: (artist: Artist) => any;
}

export function ArtistSearchResult({
  data,
  onArtistSelected,
}: ArtistSearchResultProps) {
  return (
    <SimpleGrid
      columns={{ base: 2, sm: 3, lg: 5 }}
      spacing={defaultResponsiveMargin}
      m={defaultResponsiveMargin}
    >
      {data.queryArtists.map((artist) => {
        const artistClickHandler = () => {
          onArtistSelected(artist);
        };
        return (
          <React.Fragment key={artist.id}>
            <Tile
              node={artist}
              maxW="400px"
              icon={FaMicrophoneAlt}
              onClick={artistClickHandler}
            />
          </React.Fragment>
        );
      })}
    </SimpleGrid>
  );
}
