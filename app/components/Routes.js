var App          = require('components/App');
var About        = require('components/about/About');
var Feed         = require('components/feed/Feed');
var Routes       = ReactRouter.Routes;
var Route        = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

module.exports = ReactRouter.Routes({location:'history'},
  Route({name:'app', path:'/', handler: App},
    Route({name:'about', path:'about', handler: About}),
    Route({name:'feed', path:'feed', handler: Feed}),
    DefaultRoute({handler: About})
  )
)
