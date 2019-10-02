import React, { AnchorHTMLAttributes } from "react";
import Base from "../Base";

const Link: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, css, ...props }) => {
  return <Base
    element="a"
    css={{
      color: "#686f7a",
      padding: "12px 15px",
      border: "1px solid transparent",
      borderRadius: "2px",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#f2f3f5",
        cursor: "pointer",
        border: "1px solid #686f7a",
      },
      ...css as any
    }}
    {...props}>
      {children}
    </Base>;
};

export default Link;
