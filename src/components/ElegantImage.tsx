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
  fallBackSrc?: string;
}

export default function ElegantImage({
  src,
  alt,
  fallBackSrc,
  ...props
}: ElegantImageProps & AspectRatioBoxProps) {
  const [isLoaded, setLoaded] = useState(false);
  return (
    <Skeleton isLoaded={isLoaded}>
      <AspectRatioBox {...props} backgroundColor="gray.300">
        <Image
          src={src}
          alt={alt}
          fallbackSrc={fallBackSrc}
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
