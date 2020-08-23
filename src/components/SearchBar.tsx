import React from "react";
import { InputGroup, Input, FormControl } from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../DefaultTheme";

interface SearchBarProps {
  onQueryEntered: (query: string) => any;
}

export function SearchBar({ onQueryEntered }: SearchBarProps) {
  return (
    <FormControl my={defaultResponsiveMargin} w="60%">
      <InputGroup size="lg">
        <Input
          type="text"
          placeholder="Find your favorite artist"
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
