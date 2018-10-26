import React, {Component} from 'react';


class ButterBlog extends React.Component {

  constructor() {
  super();
  this.state = {
    posts: []
  }
  }
  componentDidMount() {
  let dataURL = "http://localhost/butterblog.dev/wp-json/wp/v2/posts";
  fetch(dataURL)
    .then(res => res.json())
    .then(res => {
      this.setState({
        posts: res
      })
    })
  }
  render() {
  let posts = this.state.posts.map((post, index) => {
    return <div key={index}>
    <h3>{post.title.rendered}</h3>
    <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
    </div>
  });
  return (
    <div className="butterblog">
      <h2 className="blogheader text-center">ButterBlog</h2>
      <div className="butterposts">
        {posts}
      </div>
    </div>
  )
  }
  }
  export default ButterBlog;
