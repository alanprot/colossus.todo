import React from 'react';
import List from './list';

class App extends React.Component{
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <List list={this.state.list}/>
      </div>
    );
  }
}

export default App;
