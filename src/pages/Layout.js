import React from 'react';
import ReactDom from 'react-dom';

const LayoutStyle = {
  margin: '0',
  padding: '0',
  backgroundColor: 'gold'
};

class Layout extends React.Component {
  render() {
    return (
      <div style={LayoutStyle} className="container">
        <h1>This is the layout</h1>
      </div>
    )
  }
};

export default Layout;