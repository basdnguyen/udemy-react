import * as React from "react";
import Base from "../Base";

const Column: React.FC<JSX.IntrinsicAttributes> = ({ children, css }) => {
  return (
    <Base
      css={{
        display: "flex",
        flexDirection: "column",
        ...(css as any)
      }}
    >
      {children}
    </Base>
  );
};

export default Column;
