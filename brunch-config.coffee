exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(?!app)/
    stylesheets:
      joinTo: 'stylesheets/app.css'
    templates:
      joinTo: 'javascripts/app.js'

  plugins:
    autoprefixer:
      browsers: ["last 3 versions", "> 1%", "ie 8", "ie 9"]
      cascade: false

