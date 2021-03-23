import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Settings = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './settings')
);
const AllPatients = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/settings`} />
      <Route
        path={`${match.url}/settings`}
        render={(props) => <Settings {...props} />}
      />

      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default AllPatients;
