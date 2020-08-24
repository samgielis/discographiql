import React from "react";
import { NamedNodeWithImage, Artist, QueryData } from "../DataModel";
import { FaMicrophoneAlt } from "react-icons/fa";
import { Tile } from "./Tile";
import TileGrid from "./TileGrid";

interface ArtistSearchResultProps {
  data: QueryData<NamedNodeWithImage>;
  onArtistSelected: (artist: Artist) => any;
}

export function ArtistSearchResult({
  data,
  onArtistSelected,
}: ArtistSearchResultProps) {
  return (
    <TileGrid>
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
    </TileGrid>
  );
}
