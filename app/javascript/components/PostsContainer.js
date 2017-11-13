import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

class PostsContainer extends React.Component {
  render () {
    return (
      <div>
         <li><Link to={`/posts/${this.props.id}`}>{this.props.title}</Link></li>
      </div>
    )
  }
}

export default PostsContainer
