import React from "react"
import PropTypes from "prop-types"

class Categories extends React.Component {

  render () {
    return(
    	<div>
        <p>{this.props.name}</p>
    	</div>
    )
  }
}

export default Categories
