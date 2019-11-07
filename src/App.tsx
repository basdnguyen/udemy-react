import React from "react";
import Column from "./components/Column";
import TopBar from "./TopBar";
import Head from "./Head";
import Text from "./components/Text";
import Row from "./components/Row";
import Input from "./components/Input";
import { FaSearch } from "react-icons/fa";
import { Theme } from "./Theme";
import { useTheme } from "emotion-theming";

const App: React.FC = () => {
  const theme: Theme = useTheme();
  return (
    <>
      <Head />
      <Column css={{ backgroundColor: "lightgrey", minHeight: "100vh" }}>
        <TopBar />
        <Column
          css={{
            backgroundImage:
              "url(https://i.udemycdn.com/notices/home_banner/image/048e0cdc-3e71-47dc-ae30-e9ac7a3504b5.jpg)",
            height: "500px",
            justifyContent: "center",
            padding: "0 24px"
          }}
        >
          <Column css={{ width: "500px" }}>
            <Text css={{ fontSize: "2.5rem", color: "white", fontWeight: 600 }}>
              Learn on your schedule
            </Text>
            <Row css={{ margin: "20px 0" }}>
              <Text
                css={{ fontSize: "1.2rem", color: "white", lineHeight: "1.5" }}
              >
                Study any topic, anytime. Choose from thousands of expert-led
                courses now.
              </Text>
            </Row>
            <Row
              css={{
                flexGrow: 1,
                alignItems: "stretch",
                boxSizing: "border-box"
              }}
            >
              <Input
                placeholder="What do you want to learn?"
                css={{
                  padding: "14px 12px",
                  boxSizing: "border-box",
                  fontSize: "20px",
                  flexGrow: 1,
                  border: 0,
                  backgroundColor: "white",
                  borderTopLeftRadius: "2px",
                  borderBottomLeftRadius: "2px"
                }}
              />
              <Column
                css={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: theme.colors.primary,
                  backgroundColor: "white",
                  borderTopRightRadius: "2px",
                  borderBottomRightRadius: "2px",
                  "&:hover": {
                    color: "white",
                    backgroundColor: theme.colors.primary
                  },
                  padding: "0 16px"
                }}
              >
                <FaSearch size={"1em"} />
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default App;
