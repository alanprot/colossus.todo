import React from 'react';

var Item = React.createClass({
  render() {
    return (
      <li className="list-item">{this.props.info.name}</li>
    );
  }
});

export default Item;
