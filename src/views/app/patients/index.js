import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Patients = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './patients')
);
const AllPatients = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/patients`} />
      <Route
        path={`${match.url}/patients`}
        render={(props) => <Patients {...props} />}
      />
      <Route
        path={`${match.url}/:patient`}
        render={(props) => <Patients {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default AllPatients;
