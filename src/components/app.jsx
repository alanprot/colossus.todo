import React from 'react';
import ListStore from '../stores/list';
import ListActions from '../actions/list';
import List from './list';

class App extends React.Component{
  constructor() {
    super();
    this.state = ListStore.getState();
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    ListStore.listen(this.onChange);
    ListActions.fetchList();
  }

  componentWillMount() {
    ListStore.unlisten(this.onChange);
  }

  render() {
    if (this.state.list.length) {
      return (
        <div className="container">
          <List list={this.state.list} />
        </div>
      );
    } else {
      return (
        <div className="container loading">
          <h1><i className="glyphicon glyphicon-spinner"></i></h1>
        </div>
      );
    }
  }
}

export default App;
