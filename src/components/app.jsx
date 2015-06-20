import React from 'react';
import Route from 'react-router';
import ListStore from '../stores/list';
import ListActions from '../actions/list';
import List from './list';

var App = React.createClass({
  getInitialState() {
    return ListStore.getState();
  },

  onChange(state) {
    this.setState(state);
  },

  componentDidMount() {
    ListStore.listen(this.onChange);
    ListActions.fetchList();
  },

  componentWillMount() {
    ListStore.unlisten(this.onChange);
  },

  render() {
    if (this.state.list.length) {
      return (
        <div className="container-fluid">
          <h1>Proudly powered by Colossus</h1>
          <List list={this.state.list} />
        </div>
      );
    } else {
      return (
        <div className="container loading">
          <h1><i className="fa fa-spinner fa-spin"></i></h1>
        </div>
      );
    }
  }
});

export default App;
