import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import appCss from '../style/app.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text">Logo</li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><button type="button" className="button"><i className="fi-address-book"> </i></button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Layout;