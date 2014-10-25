var ul       = Exim.DOM.ul;
var li       = Exim.DOM.li;
var Link     = ReactRouter.Link;
var navItems = require('config').nav_items

var Nav = React.createClass({
  render: function () {
    var items = navItems.map(function (item) {
      return li(null, Link({to: item.link}, item.name));
    });

    return ul(null, items);
  }
})

module.exports = Nav;
