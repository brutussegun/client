import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

interface Login {}

const Login = (props: Login) => {
  const router = useRouter();
  const { login } = router.query;
  return <div>Check {login} </div>;
};

Login.propTypes = {};

export default Login;
