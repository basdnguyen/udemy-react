import React from "react";
import { Helmet } from "react-helmet";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import ButtonFilled from "./components/ButtonFilled";
import ButtonOutline from "./components/ButtonOutline";
import Input from "./components/Input";
import Link from "./components/Link";
import LinkIcon from "./components/LinkIcon";
import View from "./components/View";
import SignUp from "./SignUp";

const App: React.FC = () => {
  const [isOpenSignup, setIsOpenSignup] = React.useState(true);
  return (
    <View css={{ backgroundColor: "lightgrey", minHeight: "100vh" }}>
      <Helmet>
        <title>Online Courses - Learn Anything, Anywhere | Udemy</title>
        <link
          rel="icon"
          type="image/png"
          href="https://www.udemy.com/staticx/udemy/images/v6/favicon-196x196.png"
          sizes="196x196"
        ></link>
      </Helmet>
      <View
        css={{
          backgroundColor: "white",
          height: "64px",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          padding: "10px 20px",
          boxSizing: "border-box"
        }}
      >
        <View css={{ marginRight: "16px" }}>
          <img
            src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
            alt="Udemy"
            width="110"
            height="100%"
            data-purpose="udemy-brand-logo"
          ></img>
        </View>
        <View
          css={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            backgroundColor: "#f2f3f5",
            border: "1px solid transparent",
            borderRadius: "2px",
            boxSizing: "border-box",
            "&:focus-within": {
              border: "1px solid #686f7a",
              backgroundColor: "transparent"
            }
          }}
        >
          <Input
            placeholder="Search for anything"
            css={{
              padding: "10px 12px",
              boxSizing: "border-box",
              fontSize: "14px",
              flexGrow: 1,
              border: 0,
              backgroundColor: "transparent"
            }}
          />
          <View
            css={{
              display: "flex",
              alignItems: "center",
              padding: "12px",
              alignSelf: "center"
            }}
          >
            <FaSearch color="#ec5252" size={"1em"} />
          </View>
        </View>
        <Link css={{ marginLeft: "15px" }}>Teams and Enterprises</Link>
        <Link css={{ marginLeft: "3px" }}>Teach on Udemy</Link>
        <LinkIcon css={{ margin: "0 12px" }}>
          <FaShoppingCart color="#686f7a" size={"1.1em"} />
        </LinkIcon>
        <ButtonOutline css={{ marginLeft: "4px" }}>Log In</ButtonOutline>
        <ButtonFilled
          css={{ marginLeft: "4px" }}
          onClick={() => setIsOpenSignup(true)}
        >
          Sign Up
        </ButtonFilled>
      </View>
      {isOpenSignup && <SignUp />}
    </View>
  );
};

export default App;
