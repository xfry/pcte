import React from 'react';
import { Router, Route, hasHistory, Link } from "react-router";

/*

*/

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Welcome</h1>
          <ul>
            <Link to="/application">Application</Link>
            <Link to="/logout">Logout</Link>
          </ul>
        </div>
      </div>
    );
  }

};

export default Layout;