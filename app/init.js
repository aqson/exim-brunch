var utils  = require('lib/utils');
var Routes = require('components/Routes');

Exim.bootstrap('__exim__');

utils.ready(function () {
  React.renderComponent(Routes, document.body);
})
