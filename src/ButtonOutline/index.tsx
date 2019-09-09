/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const ButtonOutline: React.FC = ({ children, ...props }) => {
  return <button
    css={{
      borderRadius: "2px",
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: "1px solid #686f7a",
      color: "#686f7a",
      fontWeight: 600,
      fontSize: "16px",
      padding: "12px"
    }}
    {...props}>
      {children}
    </button>;
};

export default ButtonOutline;
