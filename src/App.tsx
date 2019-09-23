import React from "react";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";
import { FaSearch } from "react-icons/fa";
import View from "./View";
import Input from "./Input";

const App: React.FC = () => {
  return (
    <View css={{ backgroundColor: "lightgrey", minHeight: "100vh" }}>
      <View css={{ backgroundColor: "white", height: "64px", display: "flex", flexDirection: "row", alignItems: "stretch", padding: "10px 20px", boxSizing: "border-box" }}>
        <View css={{flexGrow: 1, display: "flex", flexDirection: "row", alignItems: "stretch", backgroundColor: "#f2f3f5", borderRadius: "2px"}}>
          <Input placeholder="Search for anything" css={{padding: "10px 12px", boxSizing: "border-box", fontSize: "13px", flexGrow: 1, border: 0, backgroundColor: "transparent"}}/>
          <View css={{display: "flex", alignItems: "center", padding: "12px"}}>
            <FaSearch color="#ec5252" size={"1em"} />
          </View>
        </View>
        <ButtonOutline css={{marginLeft: "4px"}}>Log In</ButtonOutline>
        <Button css={{ marginLeft: "4px" }}>Sign Up</Button>
      </View>
    </View>
  );
};

export default App;
