import React from "react";
import { useEffect } from "react";

export const IndexPage = (props) => {
  useEffect(() => {
    const token = localStorage.getItem("Token");
    console.log(token);
    if (!token) {
      props.history.push("/");
    } else {
      props.history.push("/dashboard");
    }
    // eslint-disable-next-line
  }, [0]);
  return <div></div>;
};

export default IndexPage;
