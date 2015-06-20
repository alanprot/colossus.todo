import alt from '../alt';
import ListActions from '../actions/list';

class ListStore {
  constructor() {
    this.list = [];

    this.bindListeners({
      handleListUpdate: ListActions.UPDATE_LIST,
      handleListFetch: ListActions.FETCH_LIST,
      handleCreate: ListActions.SUCCESS
    });
  }

  handleCreate(item) {
    this.list.push(item);
  }

  handleRemoveItem(item) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === item.id) {
        this.list.splice(i, 1);
      }
    }
    return true;
  }

  handleListFetch() {
    this.list = [];
  }

  handleListUpdate(list) {
    this.list = list;
  }
}

export default alt.createStore(ListStore, 'ListStore');
