import React from "react";
import { FilterConfiguration } from "../FilterUtils";
import { ButtonGroup, Button } from "@chakra-ui/core";

interface FilterToolbarProps {
  config: FilterConfiguration;
  onFilterConfigChanged: (config: FilterConfiguration) => any;
}

export default function FilterToolBar({
  config,
  onFilterConfigChanged,
}: FilterToolbarProps) {
  const toolStyleProps = {
    bg: "brand.mediumdark",
    color: "white",
    size: "sm" as "sm",
    _hover: { color: "brand.light", bg: "brand.dark" },
  };

  return (
    <ButtonGroup spacing={4}>
      <Button
        {...toolStyleProps}
        onClick={() =>
          onFilterConfigChanged({
            sortDescending: !config.sortDescending,
            filterDuplicates: config.filterDuplicates,
          })
        }
      >
        {config.sortDescending ? "Sort ascending" : "Sort descending"}
      </Button>
      <Button
        {...toolStyleProps}
        onClick={() =>
          onFilterConfigChanged({
            sortDescending: config.sortDescending,
            filterDuplicates: !config.filterDuplicates,
          })
        }
      >
        {config.filterDuplicates
          ? "Show duplicate titles"
          : "Hide duplicate titles"}
      </Button>
    </ButtonGroup>
  );
}
