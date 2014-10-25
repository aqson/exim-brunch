var constants = require('./constants');

module.exports = Exim.createActions({
  serviceActions: {
    fetchPosts: [constants.POSTS_FETCH, function () {
      return fetch('http://api.ost.io/v1/posts/');
    }]
  }
});
