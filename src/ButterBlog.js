import React, {Component} from 'react';
import { Button } from 'reactstrap';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

// Displays posts from a WordPress site using the WordPress API

class ButterBlog extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  // Pulls in posts from a WordPress blog
  componentDidMount() {
  const dataURL = "http://35.225.190.122/index.php/wp-json/wp/v2/posts";
  fetch(dataURL)
    .then(res => res.json())
    .then(res => {
      this.setState({
        posts: res
      })
    })
  }
  // Tells the app to display the title and content of the post, plus a
  // more button for each post. Currently, the button is non-functional
  render() {
    const posts = this.state.posts.map((post, index) => {
      return <div className="butterpost" key={index}>
      <h3>{post.title.rendered}</h3>
      <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
      <Button onClick={{__html: post.content.rendered}}>Read more</Button>
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
