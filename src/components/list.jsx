import React from 'react';
import Item from './item';

var List = React.createClass({
  render() {
    return (
      <ul className="list-unstyled">
      {this.props.list.map((item) => {
        return (
          <Item info={item} />
        );
      })}
      </ul>
    );
  }
});

export default List;
