import React from "react";
import { Stack, Image, Heading, PseudoBox } from "@chakra-ui/core";

interface PageHeaderProps {
  imageSrc: string;
  title: string;
  color?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  imageSrc,
  title,
  children,
  color = "white",
}) => (
  <Stack
    pos="relative"
    alignItems="center"
    justify="center"
    h="30vh"
    spacing={3}
    overflow="hidden"
    backgroundColor="#2e2e2e"
  >
    <Image
      src={imageSrc}
      objectFit="cover"
      w="100%"
      opacity={0.2}
      style={{ filter: "blur(3px)" }}
      pos="absolute"
      zIndex={0}
    />
    <Heading as="h1" size="2xl" color={color} zIndex={1}>
      {title}
    </Heading>
    <PseudoBox zIndex={1}>{children}</PseudoBox>
  </Stack>
);
