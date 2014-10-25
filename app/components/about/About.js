var div  = Exim.DOM.div;
var h1   = Exim.DOM.h1;
var h3   = Exim.DOM.h3;
var a    = Exim.DOM.a;
var code = Exim.DOM.code;

var urls = {
  react: "http://facebook.github.io/react/",
  exim: "https://github.com/hellyeahllc/exim"
}

var About = React.createClass({
  render: function () {

    return (
      div({className: 'about'},
        div({className: 'overview'},
          h1(null,
            a({href:urls.react}, " Exim "),
            " + ",
            a({href:urls.react}, " Brunch "),
            "App"
          ),
          h3(null, "Hi, we build this skeleton to introduce Exim.js and simplify your development process."),
          h3(null,
            "Put your static files",
            " (like ",
            code('index.html'),
            " or images) to ",
            code('assets'),
            " directory."
          ),
          h3(null,
            "Place all your project files to ",
            code("app"),
            "directory."
          )
        )
      )
    );
  }
})

module.exports = About;



