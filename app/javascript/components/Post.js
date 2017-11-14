import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import { Link } from 'react-router-dom'
import PostDetails from './PostDetails'

class Post extends React.Component {
  constructor() {
    super();

    this.state = {
      postDetails: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/categories/${this.props.categoryId}`)
    .then(res => {
      console.log('res', res )
      const postDetails = res.data.posts
      console.log('postDetails': postDetails)
      this.setState( {postDetails} )
    })
  }

  render () {
    return(
      <div>
          {this.state.postDetails.map(postDetails =>
            <PostDetails key={post.id} {...postDetails} />)}
      </div>
    )
  }
}
export default Post
