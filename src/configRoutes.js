import React from 'react'
import { Route, IndexRoute } from "react-router";
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

const routesConfig = (
  <Route>
    <Route path="/" component={Layout}>
      <IndexRoute component={Layout} />
    </Route>

    <Route path="*" component={NotFound} />
  </Route>
);

export default routesConfig;