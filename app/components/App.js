var Header = require('./Header')
var div    = Exim.DOM.div;
var nav    = Exim.DOM.nav;

var App = React.createClass({
  render: function () {
    return (
      div({className: 'app'},
        Header(),
        div({className:'container outer-container'},
          this.props.activeRouteHandler())
      )
    );
  }
})

module.exports = App;
