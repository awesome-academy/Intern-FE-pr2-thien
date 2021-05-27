import React from "react";
import { Switch, useRouteMatch } from "react-router";
import PrivateRoute from "routes/Admin/privateRoute";
import PublicRoute from "routes/publicRoute";
import Login from "./Login";
import Main from "./Main";

const Admin = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <PublicRoute exact path={`${match.url}/login`} component={Login} />
      <PrivateRoute path={`${match.url}`} component={Main} />
    </Switch>
  );
};

export default Admin;
