/*
 headers: {
 'x-vtex-sandbox': 'vtex/gisermanirado:todo'
 },
*/

var ListFetcher = {
  create: function(item) {
    return $.ajax({
      crossDomain: true,
      dataType: 'json',
      type: 'POST',
      data: {
        item: item
      },
      url: '//api.beta.vtex.com.br/walmartv5/colossus/vtex.todo/items'
    }).then((result) => {
      return result;
    });
  },

  fetch: function() {
    return $.ajax({
      crossDomain: true,
      dataType: 'json',
      type: 'GET',
      url: '//api.beta.vtex.com.br/walmartv5/colossus/vtex.todo/items'
    }).then((result) => {
      return result;
    });
  }
};

export default ListFetcher;
