var div      = Exim.DOM.div;
var article  = Exim.DOM.article;
var a        = Exim.DOM.a;
var span     = Exim.DOM.span;
var time     = Exim.DOM.time;
var button   = Exim.DOM.button;
var textarea = Exim.DOM.textarea;
var p        = Exim.DOM.p;
var img      = Exim.DOM.img;
var cx       = Exim.cx;

var About = React.createClass({
  getInitialState: function () {
    return {
      post: this.props.data
    }
  },
  render: function () {
    var textTag,
    post = this.state.post;

    var slug = [post.topic.repo.user.login, post.topic.repo.name, 'topics', post.topic.number].join('/');
    var href = "/@" + slug;
    var src = "https://secure.gravatar.com/avatar/" + post.user.gravatar_id + "?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png";
    var login = "@" + post.user.login;
    var loginUrl = "/@" + login;

    var areaStyle = {height: '64px'};
    if (this.state.isEditing) {
      textTag = textarea({className:'edit-post-body', defaultValue: post.text, style: areaStyle, onChange: this._saveText})
    } else {
      textTag = p(null, post.text)
    }
    console.log(post)

    return (
      article({className: 'post'},
        a({className:'post-avatar-container'},
          img({className:'post-avatar avatar', src:src})
        ),
        div({className:'post-content'},
          div({className: 'post-header'},
            a({className:'post-header', href:loginUrl}, login),
            span(null, " in "),
            a({className: 'post-url', href: href}, slug),
            time({className:'post-metadata post-date'}, post.created_at)
          ),
          div(
            {className:cx({
              'post-icons': true,
              'hidden': this.state.isEditing
            })},
            span({className:'icon icon-pencil-1 post-edit-button', title: 'Edit', onClick: this._onEdit}),
            span({className:'icon icon-trash post-delete-button', title: 'Delete', onClick: this._onDestroy})
          ),
          div({className:'post-text'},
            textTag,
            div(
              {className:cx({
                'post-buttons': true,
                'hidden': !this.state.isEditing
              })},
              button({className:'button', onClick: this._onCancel}, 'Cancel'),
              button({className:'button', onClick: this._onSave}, 'Save post (⌘↩)')
            )
          )
        )
      )
    )
  }
})

module.exports = About;

