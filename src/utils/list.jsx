var ListFetcher = {
  fetch: function() {
    return $.get('//basedevmkp.beta.vtex.com.br/walmartv5/colossus/vtex.todo/items').then((result) => {
      return result;
    });
  }
};

export default ListFetcher;
