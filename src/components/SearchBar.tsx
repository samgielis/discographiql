import React from "react";
import {
  InputGroup,
  Input,
  FormControl,
  InputLeftElement,
  Icon,
} from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../DefaultTheme";

interface SearchBarProps {
  onQueryEntered: (query: string) => any;
}

export function SearchBar({ onQueryEntered }: SearchBarProps) {
  return (
    <FormControl my={defaultResponsiveMargin} w="60%">
      <InputGroup size="lg">
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input
          type="text"
          placeholder="Search"
          borderRadius={0}
          borderColor="brand.opaquelight"
          color="brand.mediumlight"
          bg="brand.opaquedark"
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
              onQueryEntered(event.currentTarget.value);
            }
          }}
        />
      </InputGroup>
    </FormControl>
  );
}
