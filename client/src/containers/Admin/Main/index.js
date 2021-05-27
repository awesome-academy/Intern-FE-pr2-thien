import React from "react";

import "assets/css/index.css";
import SideBar from "components/Admin/SideBar";
import TopBar from "components/Admin/TopBar";
import { Switch, useRouteMatch } from "react-router";
import PersonManager from "../PersonManager";
import PrivateRoute from "routes/Admin/privateRoute";

const Main = () => {
  const match = useRouteMatch();

  return (
    <div id="wrapper">
      <SideBar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />

          <div className="container-fluid">
            <Switch>
              <PrivateRoute
                exact
                path={`${match.url}/personManager`}
                component={PersonManager}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
