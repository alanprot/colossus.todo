import alt from '../alt';
import ListFetcher from '../utils/list';

class ListActions {
  updateList(list) {
    this.dispatch(list);
  }

  fetchList() {
    this.dispatch();

    ListFetcher.fetch().then((list) => {
      this.actions.updateList(list);
    });
  }
}

export default alt.createActions(ListActions);
