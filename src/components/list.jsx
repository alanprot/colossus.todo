import React from 'react';
import Item from './item';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="unordered-list">
      {this.props.list.map((item) => {
        return (
          <Item info={item} />
        );
      })}
      </ul>
    );
  }
}

export default List;
