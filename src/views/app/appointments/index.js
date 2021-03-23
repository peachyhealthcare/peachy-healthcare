import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Appointments = React.lazy(() =>
  import(/* webpackChunkName: "dashboard" */ './appointments')
);
const Peachy = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/appointments`} />
      <Route
        path={`${match.url}/Appointments`}
        render={(props) => <Appointments {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Peachy;
