var appActions = require('components/actions');
var AppStore   = require('components/Store');

var Post = require('./Post');

var div = Exim.DOM.div;
var ul  = Exim.DOM.div;


var getState = function () {
  return {
    posts: AppStore.get('posts')
  }
}

var Feed = React.createClass({
  getInitialState: function () {
    return getState()
  },

  componentWillMount: function () {
    appActions.fetchPosts()
  },

  componentDidMount: function () {
    AppStore.addWatch(this._onChange)
  },

  componentWillUnmount: function () {
    AppStore.removeWatch(this._onChange)
  },

  _onChange: function () {
    this.setState(getState())
  },

  render: function () {
    var posts = this.state.posts.map(function(post) {
      return Post({data:post});
    })

    return (
      div({className: 'feed'},
        ul({className: 'posts'},
          posts
        )
      )
    );
  }
})

module.exports = Feed;



