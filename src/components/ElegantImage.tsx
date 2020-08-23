import React, { useState } from "react";
import {
  Skeleton,
  Image,
  AspectRatioBox,
  AspectRatioBoxProps,
} from "@chakra-ui/core";

interface ElegantImageProps {
  src: string;
  alt: string;
}

export default function ElegantImage({
  src,
  alt,
  ...props
}: ElegantImageProps & AspectRatioBoxProps) {
  const [isLoaded, setLoaded] = useState(!src);
  return (
    <Skeleton isLoaded={isLoaded}>
      <AspectRatioBox {...props} backgroundColor="gray.300">
        <Image
          src={src}
          objectFit="cover"
          opacity={isLoaded ? 1 : 0}
          transition="opacity .3s"
          onLoad={() => {
            setLoaded(true);
          }}
        />
      </AspectRatioBox>
    </Skeleton>
  );
}
