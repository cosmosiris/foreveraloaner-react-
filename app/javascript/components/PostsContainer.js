import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import Post from './Post'
import axios from 'axios'

class PostsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/categories/${this.props.categoryId}`)
    .then(res => {
      const posts = res.data.posts
      this.setState( {posts} )
    })
  }

  render () {
    return (
      <div>
        <ul className="post-list">
          {this.state.posts.map(post =>
           <li key={post.id}>
            <Post {...post}/>
            <Link to={`/posts/${post.id}`}>{ post.title }</Link>
           </li>)}
        </ul>
      </div>
    )
  }
}

export default PostsContainer
