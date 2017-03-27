import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <h2>Page not found </h2>
        <Link to='/'>Back to Home</Link>
      </div>
    )
  }
};

export default NotFound;