import React from 'react';

class Item extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <li className="list-item">{this.props.name}</li>
    );
  }

}

export default Item;
