var config = {}

config.nav_items = [
  {name:"About", link: "about"},
  {name:"Feed", link: "feed"}
]

config.twitter = {
  consumer_key: 'AmTjfn76ePHCaHlNz7E5c7jq5',
  consumer_secret: 'EM3kwd4tl50KouJD9VGlbCzrjz9BjIXjIeXBmpL5pjGic9z49g',
  bearer_token: this.consumer_key + ':' +this.consumer_secret,
  base_64_bearer_token: btoa(this.bearer_token)
}

module.exports = config
