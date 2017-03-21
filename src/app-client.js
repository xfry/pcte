import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from "react-router";
import Layout from './pages/Layout';
import PageNotFound from "./pages/PageNotFound";

const app = document.getElementById('main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}/>
    <Route path="/notfound" component={PageNotFound} />
  </Router>,
  app
);