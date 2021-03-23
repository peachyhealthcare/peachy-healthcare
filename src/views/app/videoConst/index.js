import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const VideoConst = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './videoConst')
);

const AllVideo = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/video-consultations`}
      />
      <Route
        path={`${match.url}/video-consultations`}
        render={(props) => <VideoConst {...props} />}
      />

      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default AllVideo;
