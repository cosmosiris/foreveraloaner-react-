import React from "react"
import PropTypes from "prop-types"
class PostsContainer extends React.Component {
  render () {
    return (
      <div>
        {console.log(this.props)}
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default PostsContainer
