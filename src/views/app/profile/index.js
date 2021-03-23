import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Profile = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './profile')
);
const AllPatients = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/profile`} />
      <Route
        path={`${match.url}/profile`}
        render={(props) => <Profile {...props} />}
      />

      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default AllPatients;
