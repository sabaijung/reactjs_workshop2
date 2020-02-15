import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import authRoutes from "../routes/authroutes";

class Blanklayout extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {authRoutes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => <route.component {...props} />}
              />
            ) : null;
          })}
          <Redirect from="/" to="signup" />
        </Switch>
      </div>
    );
  }
}
export default Blanklayout;
