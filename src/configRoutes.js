import React from 'react'
import { Route, IndexRoute } from "react-router";
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import ApplicationList from './react-components/ApplicationList';
import AppCanvas from './react-components/AppCanvas';
import LoginForm from './react-components/LoginForm';

const routesConfig = (
  <Route>
    <Route path="/" component={Layout}>
      <IndexRoute component={LoginForm} />
      <Route path="app" component={ApplicationList} />
      <Route path="app/canvas" component={AppCanvas} />
    </Route>

    <Route path="*" component={NotFound} />
  </Route>
);

export default routesConfig;