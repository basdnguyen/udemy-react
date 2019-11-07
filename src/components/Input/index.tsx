import React, { InputHTMLAttributes } from "react";
import Base from "../Base";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  css,
  ...props
}) => {
  return (
    <Base
      element="input"
      css={{
        border: 0,
        "&:focus": {
          outline: "none"
        },
        ...(css as any)
      }}
      {...props}
    >
      {children}
    </Base>
  );
};

export default Input;
