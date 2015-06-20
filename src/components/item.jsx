import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-item">{this.props.info.name}</li>
    );
  }
}

export default Item;
