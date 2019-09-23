import React, { ButtonHTMLAttributes } from "react";
import Base from "../Base";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, css, ...props }) => {
  return <Base
    element="button"
    css={{
      borderRadius: "2px",
      backgroundColor: "#ec5252",
      border: "0",
      color: "white",
      fontWeight: 600,
      fontSize: "16px",
      padding: "12px",
      ...css as any,
    }}
    {...props}>
      {children}
    </Base>;
};

export default Button;
