/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const Button: React.FC<any> = ({ children, ...props }) => {
  return <button
    css={{
      borderRadius: "2px",
      backgroundColor: "#ec5252",
      border: "0",
      color: "white",
      fontWeight: 600,
      fontSize: "16px",
      padding: "12px",
    }}
    {...props}>
      {children}
    </button>;
};

export default Button;
