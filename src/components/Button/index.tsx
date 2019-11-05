import React, { ButtonHTMLAttributes } from "react";
import Base from "../Base";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  css,
  ...props
}) => {
  return (
    <Base
      element="button"
      css={{
        borderRadius: "2px",
        fontWeight: 600,
        fontSize: "16px",
        padding: "12px",
        cursor: "pointer",
        border: "none",
        "&:focus": {
          outline: "0"
        },
        ...(css as any)
      }}
      {...props}
    >
      {children}
    </Base>
  );
};

export default Button;
