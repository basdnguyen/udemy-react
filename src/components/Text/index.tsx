import React, { HTMLAttributes } from "react";
import Base from "../Base";

const Text: React.FC<HTMLAttributes<HTMLElement>> = ({
  children,
  css,
  ...props
}) => {
  return (
    <Base
      element="span"
      css={{
        ...(css as any)
      }}
      {...props}
    >
      {children}
    </Base>
  );
};

export default Text;
