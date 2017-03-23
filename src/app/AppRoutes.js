import React      from "react";
import { Router } from 'react-router';
import { Route }        from 'react-router';
import { hashHistory }  from 'react-router';
import routesConfig         from "../configRoutes";


class AppRoutes extends React.Component {
  render() {
    return <Router history={hashHistory} routes={routesConfig}/>
  }
};

export default AppRoutes;