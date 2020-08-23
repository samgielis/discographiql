import React from "react";
import { Stack, Box, Text, Spinner } from "@chakra-ui/core";
import {
  FaArrowUp,
  FaExclamationTriangle,
  FaSkullCrossbones,
} from "react-icons/fa";
import { SearchState } from "../DataModel";
import "./SearchStateView.css";

interface SearchStateViewProps {
  searchState: SearchState;
}

export default function SearchStateView({ searchState }: SearchStateViewProps) {
  if (searchState === "completed") {
    return <div />;
  }

  let content = (
    <>
      <Box as={FaArrowUp} id="animated-arrow" fontSize="5rem"></Box>
      <Text fontSize={{ base: "xl", lg: "2xl" }}>
        There's nothing here yet.
        <br /> <br /> Browse your favourite artists,
        <br />
        check their discography
        <br />
        and listen on Spotify.
      </Text>
    </>
  );

  if (searchState === "loading") {
    content = <Spinner size="xl" />;
  } else if (searchState === "error") {
    content = (
      <>
        <Box as={FaSkullCrossbones} fontSize="5rem"></Box>
        <Text fontSize={{ base: "xl", lg: "2xl" }}>
          Something's wrong with your query.
        </Text>
      </>
    );
  } else if (searchState === "no results") {
    content = (
      <>
        <Box as={FaExclamationTriangle} fontSize="5rem"></Box>
        <Text fontSize={{ base: "xl", lg: "2xl" }}>
          We didn't find anything matching your search.
        </Text>
      </>
    );
  }
  return <SearchPlaceHolderWrapper>{content}</SearchPlaceHolderWrapper>;
}

const SearchPlaceHolderWrapper: React.FC<{}> = ({ children }) => (
  <Stack
    align="center"
    justify="center"
    objectFit="fill"
    m="auto"
    minH="70vh"
    color="brand.mediumdark"
    textAlign="center"
  >
    {children}
  </Stack>
);
