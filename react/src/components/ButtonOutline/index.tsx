import React, { ButtonHTMLAttributes } from "react";
import Button from "../Button";

const ButtonOutline: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, css, ...props }) => {
  return <Button
    css={{
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: "1px solid #686f7a",
      color: "#686f7a",
      ...css as any,
    }} {...props}>
      {children}
    </Button>;
};

export default ButtonOutline;
