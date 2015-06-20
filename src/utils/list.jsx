var mockData = [
  { id: 0, name: 'Example 1' },
  { id: 1, name: 'Example 2' },
  { id: 2, name: 'Example 3' },
  { id: 3, name: 'Example 4' }
];

var ListFetcher = {
  fetch: function() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(mockData);
      }, 250);
    });
  }
};
