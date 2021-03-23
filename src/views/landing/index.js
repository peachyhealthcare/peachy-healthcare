import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import AppLayout from '../../layout/AppLayout';

const Landing = React.lazy(() =>
  import(/* webpackChunkName: "viwes" */ './landing')
);
const LandingDoc = React.lazy(() =>
  import(/* webpackChunkName: "viwes" */ './landingDoc')
);
const App = ({ match }) => {
  return (
    <>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/landing`} />
          <Route
            path={`${match.url}/landing`}
            render={(props) => <Landing {...props} />}
          />
          <Route
            path={`${match.url}/practitioner`}
            render={(props) => <LandingDoc {...props} />}
          />
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
