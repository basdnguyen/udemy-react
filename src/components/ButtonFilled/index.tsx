import React, { ButtonHTMLAttributes } from "react";
import Button from "../Button";

const ButtonFilled: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  css,
  ...props
}) => {
  return (
    <Button
      css={{
        backgroundColor: "#ec5252",
        color: "white",
        border: 0,
        "&:hover": {
          backgroundColor: "#c24242"
        },
        "&:active": {
          backgroundColor: "#852a2a"
        },
        ...(css as any)
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonFilled;
