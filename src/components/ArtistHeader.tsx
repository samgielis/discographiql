import React from "react";
import { Artist } from "../DataModel";
import { Box } from "@chakra-ui/core";
import { FaSpotify } from "react-icons/fa";
import LinkButton from "./LinkButton";
import { PageHeader } from "./PageHeader";

interface ArtistHeaderProps {
  artist: Artist;
}

export default function ArtistHeader({ artist }: ArtistHeaderProps) {
  return (
    <PageHeader imageSrc={artist.image} title={artist.name}>
      <LinkButton
        backgroundColor="green.400"
        href={`https://open.spotify.com/artist/${artist.id}`}
        target="_blank"
        rel="noreferrer"
      >
        <Box as={FaSpotify} mr=".5em" fontSize="1.2em" />
        Listen
      </LinkButton>
    </PageHeader>
  );
}
