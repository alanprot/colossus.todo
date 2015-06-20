import alt from '../alt';
import ListActions from '../actions/list';

class ListStore {
  constructor() {
    this.list = [];

    this.bindListeners({
      handleListUpdate: ListActions.UPDATE_LIST,
      handleListFetch: ListActions.FETCH_LIST
    });
  }

  handleListFetch() {
    this.list = [];
  }

  handleListUpdate(list) {
    this.list = list;
  }
}

export default alt.createStore(ListStore, 'ListStore');
