import * as React from "react";
import Base from "../Base";

const Row: React.FC<JSX.IntrinsicAttributes> = ({ children, css }) => {
  return (
    <Base
      css={{
        display: "flex",
        flexDirection: "row",
        ...(css as any)
      }}
    >
      {children}
    </Base>
  );
};

export default Row;
