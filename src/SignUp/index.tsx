import * as React from "react";
import View from "../components/View";
import { FaTimes } from "react-icons/fa";
import ButtonFilled from "../components/ButtonFilled";
import Input from "../components/Input";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const SIGN_UP = gql`
{
  hello
}
`;

const SignUp: React.FC = () => {
  const { loading, error, data } = useQuery(SIGN_UP);
  if (loading) return <span>Loading...</span> ;
  if (error) return <span>{error.message}</span>;
  return <View css={{
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  }}>
    <View css={{backgroundColor: "white", width: "380px", borderRadius: "5px"}}>
      <View css={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "24px",
        alignItems: "center",
        borderBottom: "1px solid #686f7a"
      }}>
        Sign Up and Start Learning!
        <FaTimes size="1.5rem" color="#686f7a" />
      </View>

      <View css={{padding: "24px"}}>
        <Input placeholder={data.hello} css={{padding: "12px 40px", fontSize: "18px", border: "1px solid #686f7a", borderRadius: "3px"}} />
        <Input placeholder="Email" css={{padding: "12px 40px", fontSize: "18px", marginTop: "6px", border: "1px solid #686f7a", borderRadius: "3px"}} />
        <Input placeholder="Password" css={{padding: "12px 40px", fontSize: "18px", marginTop: "6px", border: "1px solid #686f7a", borderRadius: "3px"}} />
        <ButtonFilled css={{marginTop: "6px"}}>Sign Up</ButtonFilled>
      </View>
    </View>
  </View>
}

export default SignUp;
