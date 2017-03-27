import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import {Button, Row, Col, Icon, Navbar, NavItem} from 'react-materialize';
import appCss from '../style/app.scss';

const layoutStyle = {
  height: '800px',
  width: '100%'
}

const linkStyles = {
  display: 'inline-block'
}

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar brand='PCTE' right>
              <Link to="/app" style={linkStyles}>
                <Icon>apps</Icon>
              </Link>
              <Link to="/logout" style={linkStyles}>
                <Icon>close</Icon>
              </Link>
          </Navbar>
          <Row l={4}>
            <Col l={3} style={layoutStyle}>
              {this.props.children}
            </Col>
          </Row>
        </div>
      </div>
    )
  }
};

export default Layout;