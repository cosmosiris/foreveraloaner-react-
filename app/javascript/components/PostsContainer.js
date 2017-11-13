import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import Post from './Post'

class PostsContainer extends React.Component {
  render () {
    return (
      <div>
         <li><Link to={`/posts/${this.props.id}`} prop="hello" component={Post}>{this.props.title}</Link></li>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default PostsContainer
