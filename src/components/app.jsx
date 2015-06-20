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

  create() {
    let todoText = React.findDOMNode(this.refs.todo);
    ListActions.create({ id: new Date(), name: todoText.value });
  },

  render() {
    return (
      <div>
        <List list={this.state.list} />

        <input type="text" ref="todo" placeholder="Escreva seu todo"/>
        <button refs="todo-btn" onClick={this.create}>Enviar</button>
      </div>
    );
  }
});

export default App;
