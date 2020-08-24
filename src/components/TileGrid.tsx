import React from "react";
import { SimpleGrid } from "@chakra-ui/core";
import { defaultResponsiveMargin } from "../DefaultTheme";

const TileGrid: React.FC = ({ children }) => (
  <SimpleGrid
    columns={{ base: 2, sm: 3, lg: 5 }}
    spacing={defaultResponsiveMargin}
    m={defaultResponsiveMargin}
  >
    {children}
  </SimpleGrid>
);

export default TileGrid;
