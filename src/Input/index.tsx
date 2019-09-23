import React, { InputHTMLAttributes } from "react";
import Base from "../Base";


const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ children, css, ...props }) => {
  return <Base
    element="input"
    css={css}
    {...props}>
      {children}
    </Base>;
};

export default Input;
