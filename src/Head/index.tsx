import React from "react";
import { Helmet } from "react-helmet";

const Head: React.FC = () => {
  return (
    <Helmet>
      <title>Online Courses - Learn Anything, Anywhere | Udemy</title>
      <link
        rel="icon"
        type="image/png"
        href="https://www.udemy.com/staticx/udemy/images/v6/favicon-196x196.png"
        sizes="196x196"
      ></link>
    </Helmet>
  );
};

export default Head;
