import alt from '../alt';
import ListFetcher from '../utils/list';

class ListActions {
  updateList(list) {
    this.dispatch(list);
  }

  removeItem(item) {
    this.dispatch(item);
  }

  success(item) {
    this.dispatch(item);
  }

  create(item) {
    this.dispatch();

    ListFetcher.create(item).then(() => {
      this.actions.success(item);
    });
  }

  fetchList() {
    this.dispatch();

    ListFetcher.fetch().then((list) => {
      this.actions.updateList(list);
    });
  }
}

export default alt.createActions(ListActions);
