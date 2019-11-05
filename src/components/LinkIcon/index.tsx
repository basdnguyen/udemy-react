import React, { AnchorHTMLAttributes } from "react";
import Base from "../Base";
import { Theme } from "../../Theme";
import { useTheme } from "emotion-theming";

const LinkIcon: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  css,
  ...props
}) => {
  const theme: Theme = useTheme();
  return (
    <Base
      element="a"
      css={{
        width: "44px",
        height: "44px",
        color: "#686f7a",
        padding: "12px",
        border: "1px solid transparent",
        borderRadius: "50%",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "#f2f3f5",
          cursor: "pointer",
          border: `1px solid ${theme.colors.fade}`
        },
        ...(css as any)
      }}
      {...props}
    >
      {children}
    </Base>
  );
};

export default LinkIcon;
