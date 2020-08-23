import React from "react";
import { NamedNodeWithImage } from "../DataModel";
import { Box, Heading, BoxProps, PseudoBox } from "@chakra-ui/core";
import ElegantImage from "./ElegantImage";
import { defaultResponsiveMargin } from "../DefaultTheme";
import { IconType } from "react-icons/lib";

interface TileProps extends BoxProps {
  node: NamedNodeWithImage;
  icon: IconType;
  iconColor?: string;
}

export function Tile({
  node,
  icon,
  onClick,
  maxW,
  iconColor = "white",
}: TileProps) {
  const { name, image } = node;
  return (
    <Box textAlign="center" maxW={maxW}>
      <Box pos="relative" onClick={onClick} cursor="pointer">
        <ElegantImage src={image} alt={name} ratio={1} />
        <IconOverlay icon={icon} color={iconColor} />
      </Box>
      <Heading size="md" mx={0} my={defaultResponsiveMargin}>
        {name}
      </Heading>
    </Box>
  );
}

interface LogoOverlayProps {
  icon: IconType;
  color: string;
}

function IconOverlay({ icon, color }: LogoOverlayProps) {
  return (
    <PseudoBox
      w="100%"
      h="100%"
      pos="absolute"
      top={0}
      bg="black"
      color={color}
      opacity={0}
      _hover={{ opacity: 0.8 }}
      transition="opacity .3s"
    >
      <Box as={icon} fontSize="4rem" margin="auto" height="100%" />
    </PseudoBox>
  );
}
