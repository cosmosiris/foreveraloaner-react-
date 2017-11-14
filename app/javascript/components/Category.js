import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import axios from 'axios'
import PostsContainer from './PostsContainer'
import Post from './Post'

class Category extends React.Component {

  render () {
    return(
      <div>
        <PostsContainer categoryId={this.props.match.params.id}/>
      </div>
    )
  }
}

export default Category
