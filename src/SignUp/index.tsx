import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Form, Formik, FormikValues } from "formik";
import * as React from "react";
import { FaTimes } from "react-icons/fa";
import ButtonFilled from "../components/ButtonFilled";
import Input from "../components/Input";
import View from "../components/View";

const SIGN_UP = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    token: signup(name: $name, email: $email, password: $password)
  }
`;

const SignUp: React.FC = () => {
  const [signUp, { loading, error, data }] = useMutation(SIGN_UP);
  if (loading) {
    return <span>Loading...</span>;
  }
  if (error) {
    return <span>{error.message}</span>;
  }
  if (data) {
    localStorage.setItem("token", data.token);
  }
  function onSubmit(values: FormikValues) {
    signUp({ variables: { ...values } });
  }
  return (
    <View
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <View
        css={{ backgroundColor: "white", width: "380px", borderRadius: "5px" }}
      >
        <View
          css={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "24px",
            alignItems: "center",
            borderBottom: "1px solid #686f7a"
          }}
        >
          Sign Up and Start Learning!
          <FaTimes size="1.5rem" color="#686f7a" />
        </View>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={onSubmit}
          render={({ values, handleChange }) => (
            <Form>
              <View css={{ padding: "24px" }}>
                <Input
                  placeholder="Full Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  css={{
                    padding: "12px 40px",
                    fontSize: "18px",
                    border: "1px solid #686f7a",
                    borderRadius: "3px"
                  }}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  css={{
                    padding: "12px 40px",
                    fontSize: "18px",
                    marginTop: "6px",
                    border: "1px solid #686f7a",
                    borderRadius: "3px"
                  }}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  css={{
                    padding: "12px 40px",
                    fontSize: "18px",
                    marginTop: "6px",
                    border: "1px solid #686f7a",
                    borderRadius: "3px"
                  }}
                />
                <ButtonFilled css={{ marginTop: "6px" }} type="submit">
                  Sign Up
                </ButtonFilled>
              </View>
            </Form>
          )}
        />
      </View>
    </View>
  );
};

export default SignUp;
