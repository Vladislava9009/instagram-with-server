import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import { Feed } from '../feed';
import { Login, LoginCallback } from '../login';

import { FEED_ROUTE, LOGIN_ROUTE, AUTH_ROUTE } from '../../constants/routes';

import { history } from '../../services/history-service';

export const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={LOGIN_ROUTE} component={Login} exact />
        <Route path={AUTH_ROUTE} component={LoginCallback} />
        <Route path={FEED_ROUTE} component={Feed} exact />
      </Switch>
    </Router>
  );
};
