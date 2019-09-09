/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";
import { FaSearch } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <div css={{ backgroundColor: "lightgrey", minHeight: "100vh" }}>
      <div css={{ backgroundColor: "white", height: "64px", display: "flex", flexDirection: "row", alignItems: "stretch", padding: "10px 20px", boxSizing: "border-box" }}>
        <div css={{flexGrow: 1, display: "flex", flexDirection: "row", alignItems: "stretch", backgroundColor: "#f2f3f5", borderRadius: "2px"}}>
          <input placeholder="Search for anything" css={{padding: "10px 12px", boxSizing: "border-box", fontSize: "13px", flexGrow: 1, border: 0, backgroundColor: "transparent"}}/>
          <div css={{display: "flex", alignItems: "center", padding: "12px"}}>
            <FaSearch color="#ec5252" size={"1em"} />
          </div>
        </div>
        <ButtonOutline css={{marginLeft: "4px"}}>Log In</ButtonOutline>
        <Button css={{ marginLeft: "4px" }}>Sign Up</Button>
      </div>
    </div>
  );
};

export default App;
