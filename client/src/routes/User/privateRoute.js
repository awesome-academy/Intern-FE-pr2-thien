import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogined } = useSelector((state) => state["user/auth"]);

  if (!isLogined) return <Redirect to={{ pathname: "/admin/login" }} />;

  return <Route {...rest} render={() => <Component />} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
