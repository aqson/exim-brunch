var Nav    = require('./Nav')
var div    = Exim.DOM.div;
var nav    = Exim.DOM.nav;
var header = Exim.DOM.header;

var Header = React.createClass({
  render: function () {
    return (
      div({className: 'header-container', id:'header-container'},
        header({id:'header', className: 'header'},
          Nav()
        )
      )
    );
  }
})

module.exports = Header;
