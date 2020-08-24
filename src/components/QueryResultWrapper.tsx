import React from "react";
import { Stack, Box, Text, Spinner } from "@chakra-ui/core";
import {
  FaArrowUp,
  FaExclamationTriangle,
  FaSkullCrossbones,
} from "react-icons/fa";
import { QueryData, NamedNode } from "../DataModel";
import "./QueryResultWrapper.css";
import { QueryResult } from "@apollo/client/react";

interface QueryResultWrapperProps<DataNodeType extends NamedNode> {
  queryResult: QueryResult<QueryData<DataNodeType>>;
}

export default function QueryResultWrapper<DataNodeType extends NamedNode>({
  queryResult,
}: QueryResultWrapperProps<DataNodeType>) {
  const { loading, error, data } = queryResult;
  if (data && data.queryArtists.length > 0) {
    return <div />;
  }

  if (loading) {
    return (
      <SearchPlaceHolderWrapper>
        <Spinner size="xl" />;
      </SearchPlaceHolderWrapper>
    );
  }

  if (error) {
    return (
      <SearchPlaceHolderWrapper>
        <Box as={FaSkullCrossbones} fontSize="5rem"></Box>
        <Text fontSize={{ base: "xl", lg: "2xl" }}>
          Something's wrong with your query.
        </Text>
      </SearchPlaceHolderWrapper>
    );
  }

  return (
    <SearchPlaceHolderWrapper>
      <Box as={FaExclamationTriangle} fontSize="5rem"></Box>
      <Text fontSize={{ base: "xl", lg: "2xl" }}>
        We didn't find anything matching your search.
      </Text>
    </SearchPlaceHolderWrapper>
  );
}

export const SearchPlaceholder = () => (
  <SearchPlaceHolderWrapper>
    <Box as={FaArrowUp} id="animated-arrow" fontSize="5rem"></Box>
    <Text fontSize={{ base: "xl", lg: "2xl" }}>
      There's nothing here yet.
      <br /> <br /> Browse your favourite artists,
      <br />
      check their discography
      <br />
      and listen on Spotify.
    </Text>
  </SearchPlaceHolderWrapper>
);

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
