import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Prescriptions = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './prescriptions')
);

const AllPrescriptions = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/prescriptions`}
      />
      <Route
        path={`${match.url}/prescriptions`}
        render={(props) => <Prescriptions {...props} />}
      />

      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default AllPrescriptions;
