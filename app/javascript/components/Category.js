import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import axios from 'axios'

class Category extends React.Component {

  constructor() {
    super();

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/categories/${this.props.id}`)
    .then(res => {
      const posts = res.data.posts.map( (post) =>
        ({id: post.id, title: post.title, description: post.description, price: post.price, status: post.status, location: post.location, negotiable: post.negotiable}))
      this.setState( {posts} )
    })
  }

  render () {
    return(
      <div>
        {
          this.state.posts.map(post => <Post key= {post.id} id={post.id} title={post.title} description={post.description} price={post.price} status={post.status} location={post.location} negotiable={post.negotiable} />)
        }

      </div>
    )
  }
}

export default Category
