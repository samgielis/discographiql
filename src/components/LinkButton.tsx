import React from "react";
import { ButtonProps, LinkProps, Button, Link } from "@chakra-ui/core";

type LinkButtonProps = ButtonProps & LinkProps;

const LinkButton: React.FC<LinkButtonProps> = React.forwardRef(
  (props: LinkButtonProps, ref: React.Ref<any>) => {
    return <Button size="md" ref={ref} as={Link} {...props} />;
  }
);

export default LinkButton;
