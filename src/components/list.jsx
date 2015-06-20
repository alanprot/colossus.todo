import React from 'react';
import Item from './item';

class List extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ul className="unordered-list">
      {this.props.list.forEach(function(item) {
        <Item data={item}/>
      })}
      </ul>
    );
  }
}

export default List;
