var constants = require('./constants');
var transform = require('lib/utils').transform;
var config    = require('config');

module.exports = Exim.createStore({
  name: 'AppStore',
  getInitialState: function () {
    return {
      posts: []
    }
  },
  actions: transform(constants, {
    POSTS_FETCH_COMPLETED: function (response) {
      var posts = JSON.parse(response.body);
      this.set('posts', posts);
    },
    POSTS_FETCH_FAILED: function () {
      console.log('Failed to load posts');
    }
  })
})
